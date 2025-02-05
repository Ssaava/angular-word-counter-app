import { Component, signal } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [FormComponent, FormComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = signal('Analyze your Text in Real-time.');
}
