import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { FriendListComponent } from './friend-list/friend-list.component';
import { GroupListComponent } from './group-list/group-list.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';


@NgModule({
  declarations: [
    FriendListComponent,
    GroupListComponent,
    SidebarHeaderComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule
  ],
  exports:[
FriendListComponent,
GroupListComponent,
SidebarHeaderComponent
  ]
})
export class SidebarModule { }
