import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainchatRoutingModule } from './mainchat-routing.module';
import { WriteCahtComponent } from './write-caht/write-caht.component';
import { DisplayChatComponent } from './display-chat/display-chat.component';


@NgModule({
  declarations: [
    WriteCahtComponent,
    DisplayChatComponent
  ],
  imports: [
    CommonModule,
    MainchatRoutingModule
  ],
  exports:[
    DisplayChatComponent,
    WriteCahtComponent
  ]
})
export class MainchatModule { }
