import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Assgn1Component } from './assgn1/assgn1.component';
import { Assgn2Component } from './assgn2/assgn2.component';
import { Assgn3Component } from './assgn3/assgn3.component';
import { Assgn4Component } from './assgn4/assgn4.component';
import { Assgn5Component } from './assgn5/assgn5.component';
import { Assgn6Component } from './assgn6/assgn6.component';
import { Assgn7Component } from './assgn7/assgn7.component';
import { Assgn8Component } from './assgn8/assgn8.component';
import { Assgn9Component } from './assgn9/assgn9.component';
import { Assgn10Component } from './assgn10/assgn10.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Assgn11Component } from './assgn11/assgn11.component';
import { Assgn12Component } from './assgn12/assgn12.component';
import { Assgn13Component } from './assgn13/assgn13.component';
import { Assgn14Component } from './assgn14/assgn14.component';
import { TabsComponent } from './tabs/tabs.component';
import { AdminComponent } from './admin/admin.component';
import { Assign7Component } from './assign7/assign7.component';
import { Assgn16Component } from './assgn16/assgn16.component';
import { Assgn17Component } from './assgn17/assgn17.component';
import { Assgn17ngifComponent } from './assgn17ngif/assgn17ngif.component';
import { Assgn17ngswitchComponent } from './assgn17ngswitch/assgn17ngswitch.component';
import { Assgn18Component } from './assgn18/assgn18.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { Assgn19Component } from './assgn19/assgn19.component';
import { Assgn25Component } from './assgn25/assgn25.component';
import { Assgn26Component } from './assgn26/assgn26.component';
import { CustomercardsComponent } from './customercards/customercards.component';
import { CustomercardslistComponent } from './customercardslist/customercardslist.component';
import { Assgn21Component } from './assgn21/assgn21.component';
import { Assgn22Component } from './assgn22/assgn22.component';
import { Assgn23Component } from './assgn23/assgn23.component';
import { Assgn24Component } from './assgn24/assgn24.component';
import { Assgn12firstComponent } from './assgn12first/assgn12first.component';
import { Assgn12secondComponent } from './assgn12second/assgn12second.component';
import { Assgn28Component } from './assgn28/assgn28.component';




const routes: Routes = [{ path: "assgn1", component: Assgn1Component },
{ path: "assgn2", component: Assgn2Component },
{ path: "assgn3", component: Assgn3Component },
{ path: "assgn4", component: Assgn4Component },
{ path: "assgn5", component: Assgn5Component },
{ path: "assgn6", component: Assgn6Component },
{ path: "assign7", component: Assign7Component },
{ path: "assgn7", component: Assgn7Component },
{ path: "assgn8", component: Assgn8Component },
{ path: "assgn9", component: Assgn9Component },
{ path: "assgn10", component: Assgn10Component },
{ path: "first", component: FirstComponent },
{ path: "second", component: SecondComponent },
{ path: "assgn11", component: Assgn11Component },
{ path: "assgn12", component: Assgn12Component },
  { path: 'first/first', component:Assgn12firstComponent},
  { path: 'second/:id', component: Assgn12secondComponent },
{ path: "assgn13", component: Assgn13Component },
{ path: "assgn14", component: Assgn14Component },
{ path: "assgn15", component: TabsComponent },
{ path: "assgn16", component: Assgn16Component },
{ path: "assgn17", component: Assgn17Component },
{ path: "assgn",component: Assgn17ngifComponent },
{path:"assgnswitch",component:Assgn17ngswitchComponent},
{path:"assgn18",component:Assgn18Component},
{path:"assgn19",component:Assgn19Component},
{path:"assgn21",component:Assgn21Component},
{path:"assgn22",component:Assgn22Component},
{path:"assgn23",component:Assgn23Component},
{path:"assgn24",component:Assgn24Component},
{path:"assgn25",component:Assgn25Component},
{path:"assgn26",component:Assgn26Component},
{path:"assgn28",component:Assgn28Component},
{path:"customercards",component:CustomercardsComponent},
{path:"customerlist",component:CustomercardslistComponent},







{ path: "home", component: HomeComponent },
{ path: "contactus", component: ContactusComponent },
{ path: "gallery", component: GalleryComponent },

{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },


{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: PagenotfoundComponent } //if given wrong url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
