import { Component, signal } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-home',
  imports: [FormComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = signal('Analyze your Text in Real-time.');
}
