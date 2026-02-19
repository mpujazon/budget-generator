import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBudgetView } from './summary-budget-view';

describe('SummaryBudgetView', () => {
  let component: SummaryBudgetView;
  let fixture: ComponentFixture<SummaryBudgetView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryBudgetView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryBudgetView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
