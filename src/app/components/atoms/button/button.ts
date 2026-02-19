import {Component, input} from '@angular/core';
import {ButtonTypes} from '../../../interfaces/Button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.html'
})
export class Button {
  states = ['primary','secondary','submit'];

  label = input.required<string>();
  type = input.required<ButtonTypes>();
  fullWidth = input<boolean>(false);
}
