import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent} from "./components/signup/signup.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent} from "./components/home/home.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserprofileComponent} from "./components/userprofile/userprofile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FollowinglistComponent } from './components/followinglist/followinglist.component';
import {AdminComponent} from "./components/admin/admin.component";


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
