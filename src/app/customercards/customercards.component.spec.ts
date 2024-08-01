import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercardsComponent } from './customercards.component';

describe('CustomercardsComponent', () => {
  let component: CustomercardsComponent;
  let fixture: ComponentFixture<CustomercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomercardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
