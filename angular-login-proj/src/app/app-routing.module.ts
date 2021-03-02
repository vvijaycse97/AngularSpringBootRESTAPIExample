import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { SuccessComponent } from './success';

import { PageNotFoundComponent } from './pagenotfound';
import { GithubdetailsComponent } from './githubdetails';
import { LogoutComponent } from './logout';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'success', component: SuccessComponent},
  { path:'githubdetails', component :GithubdetailsComponent},
  { path:'logout', component: LogoutComponent},
  { path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
