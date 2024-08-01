import { Component } from '@angular/core';
interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-assgn26',
  templateUrl: './assgn26.component.html',
  styleUrl: './assgn26.component.css'
})
export class Assgn26Component {
  customers: Customer[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-8765' }
  ];
  
}
