


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assgn12first',
  templateUrl: './assgn12first.component.html',
    
    styleUrl: './assgn12first.component.css'

})
export class Assgn12firstComponent implements OnInit {
  name: string | null = '';
  class:string='';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.class = params.get('class')??'';

    });
  }
}
