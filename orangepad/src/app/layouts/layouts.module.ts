import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HeaderLayoutsComponent } from './header-layouts/header-layouts.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { DataSourceLayoutComponent } from './data-source-layout/data-source-layout.component';
import { AddDashboardLayoutComponent } from './add-dashboard-layout/add-dashboard-layout.component';



@NgModule({
  declarations:  [LayoutsComponent,DashboardLayoutComponent, HeaderLayoutsComponent, SidebarLayoutComponent, DataSourceLayoutComponent, AddDashboardLayoutComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
  ]
})
export class LayoutsModule { }
