import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSummaryTable } from './budget-summary-table';

describe('BudgetSummaryTable', () => {
  let component: BudgetSummaryTable;
  let fixture: ComponentFixture<BudgetSummaryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSummaryTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetSummaryTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
