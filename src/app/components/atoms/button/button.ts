import {Component, input} from '@angular/core';
import {ButtonStyles} from '../../../interfaces/Button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.html'
})
export class Button {
  label = input.required<string>();
  buttonStyle = input.required<ButtonStyles>();
  fullWidth = input<boolean>(false);
  disabled = input<boolean>(false);
}
