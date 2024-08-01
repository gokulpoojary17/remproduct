import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn9',
  templateUrl: './assgn9.component.html',
  styleUrl: './assgn9.component.css'
})
export class Assgn9Component  {
  inputval:string="";
  

  todestroy:boolean=false
  constructor()
  {
  console.log('contrsuctor called');
  }
  onbutton(inputEl:HTMLInputElement){
  this.inputval=inputEl.value;
  
  }
  destroyfile(){
    this.todestroy=!this.todestroy
  }
  
  }

