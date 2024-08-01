import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn22Component } from './assgn22.component';

describe('Assgn22Component', () => {
  let component: Assgn22Component;
  let fixture: ComponentFixture<Assgn22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
