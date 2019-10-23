import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent


  ],
  imports: [
    CommonModule
  ],
  exports:[
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
