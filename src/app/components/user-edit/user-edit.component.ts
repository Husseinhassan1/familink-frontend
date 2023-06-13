import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ResolverProperty} from "../../constants/resolver-property.enum";
import {YesNoDialogComponent} from "../yes-no-dialog/yes-no-dialog.component";
import {Route} from "../../constants/route.enum";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{
  public user!: User;
  private userId!: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.user = data[ResolverProperty.USER];
      this.userId = data[ResolverProperty.USER_ID];
    });
  }

  updateUser(user: User): void {
    this.userService.updateUser(user).subscribe(() => {
      this.navigateToUserManagement();
    });
  }

  deleteUser(): void {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {
        title: 'Delete user',
        text: 'Are you sure you want to delete this user?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(this.user.id).subscribe(() => {
          this.navigateToUserManagement();
        });
      }
    });
  }

  private navigateToUserManagement() {
    this.router.navigate([Route.USER_MANAGEMENT]);
  }

}
