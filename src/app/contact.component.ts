import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact',
  template: '<div class="contact-container"><h4>Get In Touch</h4><h3><img src="/assets/images (2).png" alt="image" size:50px >{{location}}</h3><h1><img src="/assets/download (3).png" alt="image"> {{Email}}</h1><h2><img src="/assets/240_F_86190367_M78H4ulW65c8D9a3IOZ5qcOAS189t4T5.jpg" alt="image">{{phno}}</h2><h2><img src="/assets/download.png" alt="image">{{face}}</h2> <h2><img src="/assets/download (1).png" alt="image">{{tweet}}</h2><h2> <img src="/assets/download (2).png" alt="image">{{insta}}</h2> </div>',
  styles: ['h1,h2,h3{font-size:20px;  font-family: cursive;color:black}img{width:25px}h4{font-family:  "Times New Roman", Times, serif; font-size:50px;color:black;}']
})
export class contactComponent {
  @Input() Email= ""
  @Input() phno=""
  @Input() location=""
  @Input()face=""
  @Input()tweet=""
  @Input()insta=""

  }
