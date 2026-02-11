import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCustomizerPage } from './budget-customizer-page';

describe('BudgetCustomizerPage', () => {
  let component: BudgetCustomizerPage;
  let fixture: ComponentFixture<BudgetCustomizerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetCustomizerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetCustomizerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
