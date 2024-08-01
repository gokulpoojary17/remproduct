import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assgn17ngswitchComponent } from './assgn17ngswitch.component';

describe('Assgn17ngswitchComponent', () => {
  let component: Assgn17ngswitchComponent;
  let fixture: ComponentFixture<Assgn17ngswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assgn17ngswitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assgn17ngswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
