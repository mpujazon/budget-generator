import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSelectorPage } from './service-selector-page.component';

describe('BudgetCustomizerPage', () => {
  let component: ServiceSelectorPage;
  let fixture: ComponentFixture<ServiceSelectorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSelectorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSelectorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
