import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-assgn10',
  templateUrl: './assgn10.component.html',
  styleUrl: './assgn10.component.css'
})
export class Assgn10Component {
  constructor(private logger:LoggerService){
    this.logger.log("logger service called")
  }
  

}
