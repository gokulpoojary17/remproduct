import { Component ,Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   
 
  isproduction=environment.production
  appReleaseDate=environment.appReleaseDate
  appVersion=environment.appVersion

}
       