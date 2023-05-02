import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostFormComponent } from './post-form/post-form.component';
import { PostPreviewComponent} from "./post-preview/post-preview.component";

import { HomeComponent } from "./home/home.component";
import { FollowinglistComponent } from './followinglist/followinglist.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent} from "./signup/signup.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
//import { CommentListComponentComponent } from './comment-list-component/comment-list-component.component';
//import { CommentComponentComponent } from './comment-component/comment-component.component';
//import { CommentListComponent } from './comment-list/comment-list.component';
//import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostPreviewComponent,
    FollowinglistComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserprofileComponent
    //CommentListComponentComponent,
    //CommentComponentComponent,
    //CommentListComponent,
    //CommentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
