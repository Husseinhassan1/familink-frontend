import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostFormComponent } from './post-form/post-form.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,

    PostFormComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    LoginComponent,
    SignupComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
