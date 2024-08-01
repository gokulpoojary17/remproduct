import { Component } from '@angular/core';
 interface Customer {
  name: string;
  image:string;
  city:string;
  orders:string;
}
@Component({
  selector: 'app-customercards',
  templateUrl: './customercards.component.html',
  styleUrl: './customercards.component.css'
})
export class CustomercardsComponent {
  customers: Customer[] = [
   {
     "name": "John Doe",
     "image": "/assets/download (16).jpeg",
     "city": "New York",
     "orders": "view orders",
   },
    {
      "name": "Jannet",
      "image": "/assets/images (9).jpeg",
      "city": "udupi",
      "orders": "view orders"
    },
    {
      "name": "Alice Johnson",
      "image": "/assets/download (16).jpeg",
      "city": "New York",
      "orders": "view orders"

    },
    {
      "name": "malli",
      "image": "/assets/images (9).jpeg",
      "city": "manglore",
      "orders": "view orders"


    },
    {
      "name": " Johnson",
      "image": "/assets/download (16).jpeg",
      "city": "delhi",
      "orders": "view orders"

    },
    {
      "name": " thomas",
      "image": "/assets/download (16).jpeg",
      "city": "kashmir",
      "orders": "view orders"

    },
    {
      "name": " thomas",
      "image": "/assets/download (16).jpeg",
      "city": "kashmir",
      "orders": "view orders"

    },
    {
      "name": " thomas",
      "image": "/assets/download (16).jpeg",
      "city": "kashmir",
      "orders": "view orders"

    },
    {
      "name": " thomas",
      "image": "/assets/download (16).jpeg",
      "city": "kashmir",
      "orders": "view orders"

    }
  ];
customer: any;
 

}
