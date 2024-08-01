import { Component,AfterContentInit, AfterViewInit, DoCheck, Input, OnChanges, OnInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-assgn7',
  templateUrl: './assgn7.component.html',
  styleUrl: './assgn7.component.css'
})
export class Assgn7Component 
  {

/*child component*/
  title:string= 'HomeComponent'                                                   
  @Input() message:string="";
  
  constructor(private logger:LoggerService){
 
  this.logger.log("logger service called");

   //   console.log('contrsuctor occured');
  // console.log(this.title);
  // console.log(this.message);
  }
  
 
  // ngOnChanges(){
  // console.log('onchanges occured');
  // console.log(this.message);
  
  
  // }
  // ngOnInit():void{
  // console.log('oninit occured');
  // console.log(this.message);
  
  // }
  
  // ngDoCheck(){
  // console.log('do check occured');
  // }
  // ngAfterContentInit(){
  // console.log('after content occured');
  
  // }
  // ngAfterViewInit(){
  // console.log('afterviewINit occured');
  
  // }
  // ngAfterViewChecked(){
  //   console.log('afterview checked');
    

  // }
  // ngOnDestroy(): void {
    
  //   console.log('destroying');
    
  // }
  
  
  
  
}


