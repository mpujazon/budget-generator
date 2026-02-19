import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTerms } from './payment-terms';

describe('PaymentTerms', () => {
  let component: PaymentTerms;
  let fixture: ComponentFixture<PaymentTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentTerms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTerms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
