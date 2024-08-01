import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn21Component } from './assgn21.component';

describe('Assgn21Component', () => {
  let component: Assgn21Component;
  let fixture: ComponentFixture<Assgn21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
