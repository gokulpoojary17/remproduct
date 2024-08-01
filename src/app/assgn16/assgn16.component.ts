import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn16',
  templateUrl: './assgn16.component.html',
  styleUrl: './assgn16.component.css'
})
export class Assgn16Component {
number1:number=0;
number2:number=0;
result:number=0;

  added(){
    this.result=this.number1+this.number2;
  
  }
  reset(){
    this.number1=0;
    this.number2=0;
    this.result=0;
  }

}
