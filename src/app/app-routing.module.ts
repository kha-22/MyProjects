import { NgModule } from '@angular/core';
import {RouterModule, Route } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResturantComponent } from './components/dashboard/resturant/resturant.component';

const appRoutes: Route[] = [
  { path:'dashboard' ,component: DashboardComponent ,
    children:
    [
      { path: 'resturant', component: ResturantComponent },
      { path: '', component: ResturantComponent },
      { path:'**', redirectTo:'resturant', pathMatch:'full'}
    ]
  },
  { path:'register' ,component: RegisterComponent},
  { path:'login' ,component: LoginComponent},
  { path:'' , redirectTo:'login', pathMatch:'full'},      
  { path:'**', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
