import { Component} from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-assign7',
  templateUrl: './assign7.component.html',
  styleUrl: './assign7.component.css'
})
export class Assign7Component {


  constructor(private logger:LoggerService){
    this.logger.log("logger service called")
  }
  
}
