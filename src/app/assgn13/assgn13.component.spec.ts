import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn13Component } from './assgn13.component';

describe('Assgn13Component', () => {
  let component: Assgn13Component;
  let fixture: ComponentFixture<Assgn13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
