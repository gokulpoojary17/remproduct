import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn6Component } from './assgn6.component';

describe('Assgn6Component', () => {
  let component: Assgn6Component;
  let fixture: ComponentFixture<Assgn6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
