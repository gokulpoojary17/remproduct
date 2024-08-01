import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn5Component } from './assgn5.component';

describe('Assgn5Component', () => {
  let component: Assgn5Component;
  let fixture: ComponentFixture<Assgn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
