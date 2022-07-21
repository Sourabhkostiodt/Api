import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DataSourceLayoutComponent } from './data-source-layout/data-source-layout.component';
import { LayoutsComponent } from './layouts.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild([



  ])],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
