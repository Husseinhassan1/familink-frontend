
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PostFormComponent} from './components/post-form/post-form.component';
import {PostPreviewComponent} from './components/post-preview/post-preview.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from "./components/signup/signup.component";
import {FormsModule} from "@angular/forms";
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
import {UpdateUserComponent} from './components/update-user/update-user.component';

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
    UpdateUserComponent,

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
    HttpClientModule
  ],





  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

