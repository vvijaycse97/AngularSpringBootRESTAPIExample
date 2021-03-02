import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login';
import { SuccessComponent } from './success';
import { GithubdetailsComponent } from './githubdetails';
import { PageNotFoundComponent } from './pagenotfound';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
    GithubdetailsComponent,
    PageNotFoundComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
