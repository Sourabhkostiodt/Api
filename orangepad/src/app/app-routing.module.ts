import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './auth/components/about/about.component';
import { HomeComponent } from './auth/components/home/home.component';

import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { AddDashboardLayoutComponent } from './layouts/add-dashboard-layout/add-dashboard-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DataSourceLayoutComponent } from './layouts/data-source-layout/data-source-layout.component';
import { LayoutsComponent } from './layouts/layouts.component';




const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'register', component:RegisterComponent },
    { path: 'reset-password', component:ResetPasswordComponent },
     {
          component: LayoutsComponent,
          path: 'layout',
          children:[
             { path: 'dashboard',
             component: DashboardLayoutComponent},
             { path: 'source',
              component: DataSourceLayoutComponent },
              { path: 'add-dash',
              component:AddDashboardLayoutComponent },
          ]
     },

    { path: '**', redirectTo: '/home' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
