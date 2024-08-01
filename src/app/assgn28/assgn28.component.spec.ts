import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn28Component } from './assgn28.component';

describe('Assgn28Component', () => {
  let component: Assgn28Component;
  let fixture: ComponentFixture<Assgn28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn28Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
