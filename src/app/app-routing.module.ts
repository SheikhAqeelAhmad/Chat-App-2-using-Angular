import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraionModule } from './registraion/registraion.module';

const routes: Routes = [{
  path: '**',
  component: RegistraionModule
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
