import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
