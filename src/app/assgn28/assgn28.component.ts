import { Component } from '@angular/core';
interface Customer {
  name: string;
  image:string;
  city:string;
  orders:string;
  adress:string;
}
@Component({
  selector: 'app-assgn28',
  templateUrl: './assgn28.component.html',
  styleUrl: './assgn28.component.css'
})
export class Assgn28Component {
  customers: Customer[] = [
    {
      "name": "John Doe",
      "image": "/assets/download (16).jpeg",
      "city": "New York",
      "orders": "view orders",
      "adress":"12/1,main road"
    }
     
   ];
 customer: any;
  
}
