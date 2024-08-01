import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn7Component } from './assgn7.component';

describe('Assgn7Component', () => {
  let component: Assgn7Component;
  let fixture: ComponentFixture<Assgn7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
