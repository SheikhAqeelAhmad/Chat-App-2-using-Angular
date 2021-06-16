import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './registraion/login/login.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { MainchatModule } from './mainchat/mainchat.module';
import {RegistraionModule} from './registraion/registraion.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule,
    MainchatModule,
    RegistraionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
