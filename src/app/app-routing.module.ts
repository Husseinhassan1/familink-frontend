import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/post-form', pathMatch: 'full' },
  { path: 'post-form', component: PostFormComponent },
  { path: 'post-preview', component: PostPreviewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
