import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostFormComponent } from './post-form/post-form.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/post-form', pathMatch: 'full' },
  { path: 'post-form', component: PostFormComponent },
  { path: 'post-preview', component: PostPreviewComponent }
];

import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginResolver} from "./resolvers/login.resolver";
import {SignupResolver} from "./resolvers/signup.resolver";
import {UserprofileComponent} from "./userprofile/userprofile.component";
import {FollowinglistComponent} from "./followinglist/followinglist.component";
//import {UserProfileResolve} from "./resolvers/userprofile.resolver";
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    resolve: { user: LoginResolver }
  },
  {
    path: 'signup',
    component: SignupComponent,
    resolve: { user: SignupResolver }
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: { user: LoginResolver }
  },
  {
       path: 'userprofile',
      component:UserprofileComponent,
  //   resolve: {
  //     UserProfileResolve
  // }
    },
    {
       path: 'userprofile/followinglist',
       component:FollowinglistComponent,
    }
  // {
  //   path: 'home',
  //   component:HomeComponent,
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
