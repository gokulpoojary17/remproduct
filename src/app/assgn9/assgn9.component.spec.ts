import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn9Component } from './assgn9.component';

describe('Assgn9Component', () => {
  let component: Assgn9Component;
  let fixture: ComponentFixture<Assgn9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
