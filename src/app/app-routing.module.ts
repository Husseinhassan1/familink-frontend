import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {UserprofileComponent} from "./userprofile/userprofile.component";
import {FollowinglistComponent} from "./followinglist/followinglist.component";
import {LoginResolver} from "./resolvers/login.resolver";
import {SignupResolver} from "./resolvers/signup.resolver";
//import {CommentsResolver} from "./resolvers/comment-resolver";
//import {UserProfileResolve} from "./resolvers/userprofile.resolver";

const routes: Routes = [

  {path: 'post-form', component: PostFormComponent },
  {path: 'post-preview', component: PostPreviewComponent },
  {path: '', component: LoginComponent, resolve: { user: LoginResolver }},
  {path: 'signup', component: SignupComponent, resolve: { user: SignupResolver }},
  {path: 'login', component: LoginComponent, resolve: { user: LoginResolver }},
  {path: 'home', component:HomeComponent,},
  {path: 'userprofile', component:UserprofileComponent},
  {path: 'userprofile/followinglist', component:FollowinglistComponent,},
 // {path: 'comments/:id', component: CommentListComponent, resolve: {comments: CommentResolver}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
