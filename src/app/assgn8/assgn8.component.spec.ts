import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn8Component } from './assgn8.component';

describe('Assgn8Component', () => {
  let component: Assgn8Component;
  let fixture: ComponentFixture<Assgn8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
