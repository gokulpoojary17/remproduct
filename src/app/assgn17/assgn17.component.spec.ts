import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn17Component } from './assgn17.component';

describe('Assgn17Component', () => {
  let component: Assgn17Component;
  let fixture: ComponentFixture<Assgn17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
