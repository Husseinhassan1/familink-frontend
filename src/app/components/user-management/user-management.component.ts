import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-user',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // Generate fake users
    this.users = this.generateFakeUsers(10);
  }

  generateFakeUsers(num: number): User[] {
    const users: User[] = [];
    for (let i = 1; i <= num; i++) {
      const user: User = {
        id: i,
        username: `user${i}`,
        firstName: `User ${i}`,
        lastName: `User ${i}`,
        email: `user${i}@example.com`,
        password: `password${i}`,
        isAdmin: false
      };
      users.push(user);
    }
    return users;
  }

  updateUser(user: User) {
    this.router.navigate(['/update-user', user.id]);
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  goBack() {
    history.back();
  }
}
