
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PostFormComponent} from './components/post-form/post-form.component';
import {PostPreviewComponent} from './components/post-preview/post-preview.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from "./components/signup/signup.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./components/home/home.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserprofileComponent} from "./components/userprofile/userprofile.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FollowinglistComponent} from './components/followinglist/followinglist.component';
import {AdminComponent} from "./components/admin/admin.component";
import {UserManagementComponent} from './components/user-management/user-management.component';
import {UserComponent} from './components/user/user.component';
import {MatTableModule} from '@angular/material/table';
import {UserFormComponent} from './components/user-form/user-form.component';
import { CommentComponent } from './components/comment/comment.component';
import {MatInputModule} from "@angular/material/input";
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {LoginService} from "./services/login.service";
import {SignupService} from "./services/signup.service";
import {PostService} from "./services/post.service";
import {HomeService} from "./services/home.service";
import {UserService} from "./services/user.service";
import {UserprofileService} from "./services/userprofile.service";
import {CommentsService} from "./services/comment.service";
import {UserResolver} from "./resolvers/user.resolver";

//import { CommentListComponentComponent } from './comment-list-component/comment-list-component.component';
//import { CommentComponentComponent } from './comment-component/comment-component.component';
//import { CommentListComponent } from './comment-list/comment-list.component';
//import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SignupComponent,
    UserprofileComponent,
    FollowinglistComponent,
    PostFormComponent,
    PostPreviewComponent,
    HomeComponent,
    AdminComponent,
    UserManagementComponent,
    UserComponent,
    UserFormComponent,
    CommentComponent,
    UserEditComponent,
    YesNoDialogComponent,

    //CommentListComponentComponent,
    //CommentComponentComponent,
    //CommentListComponent,
    //CommentComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],





  providers: [
    LoginService,
    SignupService,
    PostService,
    HomeService,
    UserService,
    UserprofileService,
    CommentsService,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

