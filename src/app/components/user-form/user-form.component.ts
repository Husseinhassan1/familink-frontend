import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy{
  @Output()
  saveUser: EventEmitter<User> = new EventEmitter<User>();

  @Input()
  user: User | undefined

  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [this.user?.firstName, Validators.required],
      lastName: [this.user?.lastName, Validators.required],
      nickname: [this.user?.nickname, Validators.required],
      password: [this.user?.password, Validators.required]
    });
  }

  ngOnDestroy(): void {}

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveUser.emit(this.form.value);
  }
}
