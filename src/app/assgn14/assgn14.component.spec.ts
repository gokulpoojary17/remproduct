import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn14Component } from './assgn14.component';

describe('Assgn14Component', () => {
  let component: Assgn14Component;
  let fixture: ComponentFixture<Assgn14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
