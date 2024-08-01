import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn24Component } from './assgn24.component';

describe('Assgn24Component', () => {
  let component: Assgn24Component;
  let fixture: ComponentFixture<Assgn24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn24Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
