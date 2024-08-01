import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn12Component } from './assgn12.component';

describe('Assgn12Component', () => {
  let component: Assgn12Component;
  let fixture: ComponentFixture<Assgn12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
