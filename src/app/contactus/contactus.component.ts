import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
name:string=""
feedback:string=""

showError: boolean = false
submitForm() {
  if (!this.name||!this.feedback) {
    this.showError = true;
  } 
  else {                     
    this.showError = false;           
    // Form submission logic
    console.log("Form submitted successfully!");
  
  }
}
}
