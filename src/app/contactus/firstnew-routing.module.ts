import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactusComponent  } from './contactus.component';
import { contactComponent } from '../contact.component';

const routes: Routes = [{ path: '', component: ContactusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class contactusRoutingModule { }
