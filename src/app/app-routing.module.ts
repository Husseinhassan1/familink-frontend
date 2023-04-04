import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginResolver} from "./resolvers/login.resolver";
import {SignupResolver} from "./resolvers/signup.resolver";
import {HomeComponent} from "./home/home.component";

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
    path: 'home',
    component:HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
