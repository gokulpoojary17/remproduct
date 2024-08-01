import { Component } from '@angular/core';
import { environment } from '../environments/environment';
environment
let hamBurger: HTMLElement | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'remproduct';
  displayval='string';
  getvalue(val:string)
  {
    console.warn(val)
    this.displayval=val
  }
  appVersion = environment.appVersion;
  appReleaseDate = environment.appReleaseDate;
  isproduction=environment.production

 

//...

// Inside the component class

ngOnInit() {
  hamBurger = document.querySelector("#sidebar") as HTMLElement;
  hamBurger.addEventListener("click", (event) => {
    hamBurger?.classList.toggle("expand");
  });
}






}

