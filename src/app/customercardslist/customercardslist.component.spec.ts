import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercardslistComponent } from './customercardslist.component';

describe('CustomercardslistComponent', () => {
  let component: CustomercardslistComponent;
  let fixture: ComponentFixture<CustomercardslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomercardslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomercardslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
