import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn16Component } from './assgn16.component';

describe('Assgn16Component', () => {
  let component: Assgn16Component;
  let fixture: ComponentFixture<Assgn16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
