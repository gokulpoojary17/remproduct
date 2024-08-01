import { Component } from '@angular/core';
interface Customer {
  name: string;
  email: string;
  image: string;
  adress:string;
  city:string;
  orders:string;
}
@Component({
  selector: 'app-customercardslist',
  templateUrl: './customercardslist.component.html',
  styleUrl: './customercardslist.component.css'
})
export class CustomercardslistComponent {
  customers: Customer[] = [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "image": "/assets/download (16).jpeg",
      "adress": "1234 Main St",
      "city": "New York",
      "orders": "10"
    },
    {
      "name": "Jannet",
      "email": "jane.smith@example.com",
      "image": "/assets/images (9).jpeg",
      "adress": "12 Main State road",
      "city": "udupi",
      "orders": "18"
    },
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "image": "/assets/download (16).jpeg",
      "adress": "1234 Main St",
      "city": "New York",
      "orders": "10"

    },
    {
      "name": "malli",
      "email": "alice.johnson@example.com",
      "image": "/assets/images (9).jpeg",
      "adress": "1232 main road",
      "city": "manglore",
      "orders": "12"


    },
    {
      "name": " Johnson",
      "email": "alice.johnson@example.com",
      "image": "/assets/download (16).jpeg",
      "adress": "1234 Main State road",
      "city": "delhi",
      "orders": "10"

    },
    {
      "name": " maria",
      "email": "alice.johnson@example.com",
      "image": "/assets/images (9).jpeg",
      "adress": "123  State road",
      "city": "pune",
      "orders": "120"

    },
    {
      "name": " Johnsi",
      "email": "alice.johnson@example.com",
      "image": "/assets/download (16).jpeg",
      "adress": "34 Main  road",
      "city": "Mumbai",
      "orders": "10"

    },
    {
      "name": " rani",
      "email": "alice.johnson@example.com",
      "image": "/assets/images (9).jpeg",
      "adress": "1234 Main State road",
      "city": "delhi",
      "orders": "10"

    }

  ];
}
