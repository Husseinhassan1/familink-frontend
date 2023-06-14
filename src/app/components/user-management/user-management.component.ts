import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Route } from '../../constants/route.enum';

@Component({
  selector: 'app-crud-user',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  updateUser(user: User): void {
    this.router.navigate([`${Route.USER_EDIT}/${user.id}`], { relativeTo: this.route });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe(() => {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
    });
  }

  goBack(): void {
    history.back();
  }
}
