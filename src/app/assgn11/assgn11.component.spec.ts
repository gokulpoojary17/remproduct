import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn11Component } from './assgn11.component';

describe('Assgn11Component', () => {
  let component: Assgn11Component;
  let fixture: ComponentFixture<Assgn11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
