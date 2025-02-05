import { Component, inject, signal } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ControlCounterService } from '../../services/control-counter.service';

@Component({
  selector: 'app-form',
  imports: [CheckboxComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  controlCounterService: ControlCounterService = inject(ControlCounterService);
  excludeSpaces = this.controlCounterService.excludeSpaces;
  characterLimit = this.controlCounterService.characterLimit;
  toggleCharacterLimit() {
    this.controlCounterService.toggleCharacterLimit();
  }
  toggleExcludeSpaces() {
    this.controlCounterService.toggleExcludeSpaces();
  }
}
