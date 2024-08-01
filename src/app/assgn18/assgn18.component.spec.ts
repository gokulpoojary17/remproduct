import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn18Component } from './assgn18.component';

describe('Assgn18Component', () => {
  let component: Assgn18Component;
  let fixture: ComponentFixture<Assgn18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
