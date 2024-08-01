import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn1Component } from './assgn1.component';

describe('Assgn1Component', () => {
  let component: Assgn1Component;
  let fixture: ComponentFixture<Assgn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
