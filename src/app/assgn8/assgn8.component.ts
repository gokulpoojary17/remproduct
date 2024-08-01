import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-assgn8',
  templateUrl: './assgn8.component.html',
  styleUrl: './assgn8.component.css'
})
export class Assgn8Component implements OnInit {
  show = environment.production;
 

  ngOnInit(): void {
    if (!this.show) {
      console.log('environment is false');
        console.log(this.show);
      
        
        
    }
  }


}
