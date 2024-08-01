import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error.component';
import {contactComponent} from './contact.component';
import { FooterComponent } from './footer/footer.component';
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
import { Assgn14Component } from './assgn14/assgn14.component';
import { Assgn12Component } from './assgn12/assgn12.component';
import { Assgn13Component } from './assgn13/assgn13.component';
import { TabsComponent } from './tabs/tabs.component';
import { Assign7Component } from './assign7/assign7.component';
import { Assgn16Component } from './assgn16/assgn16.component';
import { Assgn17Component } from './assgn17/assgn17.component';
import { Assgn17ngswitchComponent } from './assgn17ngswitch/assgn17ngswitch.component';
import { Assgn17ngifComponent } from './assgn17ngif/assgn17ngif.component';
import { Assgn18Component } from './assgn18/assgn18.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { Assgn19Component } from './assgn19/assgn19.component';
import { Assgn25Component } from './assgn25/assgn25.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Assgn26Component } from './assgn26/assgn26.component';
import { CustomercardsComponent } from './customercards/customercards.component';
import { CustomercardslistComponent } from './customercardslist/customercardslist.component';
import { CustomersComponent } from './customers/customers.component';
import { BookratingComponent } from './bookrating/bookrating.component';
import { Assgn21Component } from './assgn21/assgn21.component';
import { Assgn22Component } from './assgn22/assgn22.component';
import { Assgn23Component } from './assgn23/assgn23.component';
import { Assgn24Component } from './assgn24/assgn24.component';
import { Assgn12firstComponent } from './assgn12first/assgn12first.component';
import { Assgn12secondComponent } from './assgn12second/assgn12second.component';
import { Assgn28Component } from './assgn28/assgn28.component';
import { ThePipe } from './the.pipe';

// import { AdminComponent } from './admin/admin.component';
// import { LoginComponent } from './login/login.component';
// import { Assign7Component } from './assign7/assign7.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    ErrorComponent,
    contactComponent,
    FooterComponent,
    PagenotfoundComponent,
    GalleryComponent,
    Assgn1Component,
    Assgn2Component,
    Assgn3Component,
    Assgn4Component,
    Assgn5Component,
    Assgn6Component,
    Assgn7Component,
    Assgn8Component,
    Assgn9Component,
    Assgn10Component,
    FirstComponent,
    SecondComponent,
    Assgn11Component,
    Assgn14Component,
    
    Assgn12Component,
    Assgn13Component,
    TabsComponent,
    Assign7Component,
    Assgn16Component,
    Assgn17Component,
    Assgn17ngswitchComponent,
    Assgn17ngifComponent,
    Assgn18Component,
    BookdetailComponent,
    Assgn19Component,
    Assgn25Component,
    Assgn26Component,
    CustomercardsComponent,
    CustomercardslistComponent,
    CustomersComponent,
    BookratingComponent,
    Assgn21Component,
    Assgn22Component,
    Assgn23Component,
    Assgn24Component,
    Assgn12firstComponent,
    Assgn12secondComponent,
    Assgn28Component,
    ThePipe,
    // AdminComponent,
    // LoginComponent,
    // Assign7Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
