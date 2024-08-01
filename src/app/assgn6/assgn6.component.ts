import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn6',
  templateUrl: './assgn6.component.html',
  styleUrl: './assgn6.component.css'
})
export class Assgn6Component {
username:string="Gokul";
showimage:boolean=false
 profileimg:string="assets/images.png"

toggleprofile(){
  this.showimage=!this.showimage;
}


}
