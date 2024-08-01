import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn23Component } from './assgn23.component';

describe('Assgn23Component', () => {
  let component: Assgn23Component;
  let fixture: ComponentFixture<Assgn23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn23Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
