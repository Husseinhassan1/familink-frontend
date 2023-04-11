import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-user',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
// export class UserManagementComponent implements OnInit {
//   users = [];
//
//   constructor(private router: Router) { }
//
//   ngOnInit(): void {
//     // Generate some fake users for display
//     for (let i = 0; i < 10; i++) {
//       this.users.push({
//         id: i,
//         username: `user${i}`,
//         fullName: `User ${i}`,
//         email: `user${i}@example.com`
//       });
//     }
//   }
//
//   goBack(): void {
//     // Return to previous page
//     this.router.navigate(['/admin']);
//   }
//
//   editUser(user): void {
//     // Navigate to the update page for the selected user
//     this.router.navigate(['/admin/users', user.id, 'update']);
//   }
//
//   deleteUser(user): void {
//     // Delete the selected user
//     const index = this.users.indexOf(user);
//     if (index >= 0) {
//       this.users.splice(index, 1);
//     }
//   }
// }
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
        fullName: `User ${i}`,
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
