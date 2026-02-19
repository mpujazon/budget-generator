import {Component, inject, output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CustomerData} from '../../interfaces/CustomerData';

@Component({
  selector: 'app-budget-request-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './budget-request-form.html'
})
export class BudgetRequestForm {
  private fb = inject(FormBuilder);
  onBudgetRequest = output<CustomerData>();

  form = this.fb.group({
    name:['',[Validators.required]],
    phone:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]]
  });

  onSubmit(){
    if(this.form.valid){
      this.onBudgetRequest.emit(this.form.getRawValue() as CustomerData)
      this.form.reset();
      // Pop Up: Request Submitted
    }else{
      console.error('Invalid form.')
    }
  }
}
