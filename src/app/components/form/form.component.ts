import { Component, effect, inject, signal } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ControlCounterService } from '../../services/control-counter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CheckboxComponent, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  controlCounterService: ControlCounterService = inject(ControlCounterService);
  excludeSpaces = this.controlCounterService.excludeSpaces;
  characterLimit = this.controlCounterService.characterLimit;
  textContent = this.controlCounterService.textContent;
  totalReadingTime = this.controlCounterService.readingTime;

  toggleCharacterLimit() {
    this.controlCounterService.toggleCharacterLimit();
  }
  toggleExcludeSpaces() {
    this.controlCounterService.toggleExcludeSpaces();
  }
}
