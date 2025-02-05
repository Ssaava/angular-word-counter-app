import { Component, Input } from '@angular/core';
let uniqueId = 0;
@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input() onchange: () => void = () => {};
  @Input() state: any;
  @Input() title: string = '';

  inputId = `custom-input-${uniqueId++}`;
}
