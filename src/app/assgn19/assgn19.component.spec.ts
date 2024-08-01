import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn19Component } from './assgn19.component';

describe('Assgn19Component', () => {
  let component: Assgn19Component;
  let fixture: ComponentFixture<Assgn19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
