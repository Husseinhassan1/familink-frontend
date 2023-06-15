import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostFormComponent} from './components/post-form/post-form.component';
import {PostPreviewComponent} from './components/post-preview/post-preview.component';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
//import {CommentsResolver} from "./resolvers/comment-resolver";
import {UserProfileResolver} from "./resolvers/userprofile.resolver";
import {HomeComponent} from "./components/home/home.component";
import {UserProfileComponent} from "./components/userprofile/userprofile.component";
import {FollowinglistComponent} from "./components/followinglist/followinglist.component";
import {AdminComponent} from "./components/admin/admin.component";
import {UserManagementComponent} from "./components/user-management/user-management.component";
import {Route} from "./constants/route.enum";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {ResolverProperty} from "./constants/resolver-property.enum";
import {UserResolver} from "./resolvers/user.resolver";
import {FollowerlistComponent} from "./components/followerlist/followerlist.component";


const routes: Routes = [


  {
    path: Route.EMPTY,
    component: LoginComponent,
  },
  {
    path: 'post-form',
    component: PostFormComponent
  },
  {
    path: 'post-preview',
    component: PostPreviewComponent
  },
  {
    path: Route.SIGNUP,
    component: SignupComponent,
  },
  {
    path: Route.HOME,
    component: HomeComponent,
  },

  {
    path: Route.USER_PROFILE,
    component: UserProfileComponent,
    resolve: {
      userProfile: UserProfileResolver,
    },
  },
  {
    path: 'userprofile/followinglist',
    component: FollowinglistComponent,
  },
  {
    path: 'userprofile/followerlist',
    component: FollowerlistComponent,
  },

  {
    path: Route.ADMIN,
    component: AdminComponent,
  },
  {
    path: Route.USER_MANAGEMENT,
    component: UserManagementComponent,
  },
  {
    path: Route.USER_MANAGEMENT + '/' + Route.USER_EDIT + '/:' + Route.USER_ID,
    component: UserEditComponent,
    resolve: {
      [ResolverProperty.USER]: UserResolver,
    }
  }

  // {path: 'comments/:id', component: CommentListComponent, resolve: {comments: CommentResolver}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
