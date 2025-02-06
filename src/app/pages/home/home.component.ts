import { ControlCounterService } from './../../services/control-counter.service';
import { Component, inject, signal } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LetterDensityComponent } from '../../components/letter-density/letter-density.component';

@Component({
  selector: 'app-home',
  imports: [
    FormComponent,
    FormComponent,
    CardComponent,
    LetterDensityComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  controlCounterService: ControlCounterService = inject(ControlCounterService);
  title = signal('Analyze your Text in Real-time.');
  textContent = this.controlCounterService.textContent;
  totalCharacters = this.controlCounterService.totalCharacters;
  totalWords = this.controlCounterService.totalWords;
  letterDensity = this.controlCounterService.letterDensity;
  characterDensity = this.controlCounterService.letterDensity();

  totalCount = signal(0);
  character = signal('');
  percentage = signal(0);
}
