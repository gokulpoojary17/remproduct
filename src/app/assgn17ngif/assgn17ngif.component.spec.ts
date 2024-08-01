import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn17ngifComponent } from './assgn17ngif.component';

describe('Assgn17ngifComponent', () => {
  let component: Assgn17ngifComponent;
  let fixture: ComponentFixture<Assgn17ngifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn17ngifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn17ngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
