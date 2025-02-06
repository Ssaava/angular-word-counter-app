import { SliderPipe } from '../../pipes/slider.pipe';
import { ControlCounterService } from './../../services/control-counter.service';
import { Component, inject, Input, signal } from '@angular/core';

@Component({
  selector: 'app-letter-density',
  imports: [SliderPipe],
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
