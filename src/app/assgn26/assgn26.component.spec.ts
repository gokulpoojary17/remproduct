import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn26Component } from './assgn26.component';

describe('Assgn26Component', () => {
  let component: Assgn26Component;
  let fixture: ComponentFixture<Assgn26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn26Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
