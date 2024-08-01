import { Component,Input } from '@angular/core';

@Component({
  selector: 'error',
  template: '<div>{{error}}</div>',
  styles: ['div{color:red;position:fixed;}']
})
export class ErrorComponent {
@Input()error:string="error";
}