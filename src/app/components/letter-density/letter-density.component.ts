import { Component, inject, Input } from '@angular/core';
import { ControlCounterService } from './../../services/control-counter.service';

@Component({
  selector: 'app-letter-density',
  templateUrl: './letter-density.component.html',
  styleUrl: './letter-density.component.css',
})
export class LetterDensityComponent {
  controlCounterService: ControlCounterService = inject(ControlCounterService);
  @Input() characterDensity: {
    character: string;
    totalCount: number;
    percentage: number;
  }[] = [];
  @Input() totalCount: any;
  @Input() character: any;
  @Input() percentage: any;
}
