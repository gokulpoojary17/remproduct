import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn12firstComponent } from './assgn12first.component';

describe('Assgn12firstComponent', () => {
  let component: Assgn12firstComponent;
  let fixture: ComponentFixture<Assgn12firstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn12firstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn12firstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
