import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn10Component } from './assgn10.component';

describe('Assgn10Component', () => {
  let component: Assgn10Component;
  let fixture: ComponentFixture<Assgn10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
