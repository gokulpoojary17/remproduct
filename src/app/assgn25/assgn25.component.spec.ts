import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn25Component } from './assgn25.component';

describe('Assgn25Component', () => {
  let component: Assgn25Component;
  let fixture: ComponentFixture<Assgn25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
