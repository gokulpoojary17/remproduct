import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn12secondComponent } from './assgn12second.component';

describe('Assgn12secondComponent', () => {
  let component: Assgn12secondComponent;
  let fixture: ComponentFixture<Assgn12secondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn12secondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn12secondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
