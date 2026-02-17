import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRequestForm } from './budget-request-form';

describe('BudgetRequestForm', () => {
  let component: BudgetRequestForm;
  let fixture: ComponentFixture<BudgetRequestForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetRequestForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetRequestForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
