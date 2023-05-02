import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostFormComponent} from './components/post-form/post-form.component';
import {PostPreviewComponent} from './components/post-preview/post-preview.component';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LoginResolver} from "./resolvers/login.resolver";
//import {UserProfileResolve} from "./resolvers/userprofile.resolver";
import {HomeComponent} from "./components/home/home.component";
import {UserprofileComponent} from "./components/userprofile/userprofile.component";
import {FollowinglistComponent} from "./components/followinglist/followinglist.component";
import {AdminComponent} from "./components/admin/admin.component";


const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    resolve: {user: LoginResolver}
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
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {user: LoginResolver}

  },
  {

    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'userprofile',
    component: UserprofileComponent,
  },
  {
    path: 'userprofile/followinglist',
    component: FollowinglistComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
