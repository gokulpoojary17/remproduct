import { Component } from '@angular/core';
interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers: Customer[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-8765' }
  ];
}
