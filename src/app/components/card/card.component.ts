import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() backgroundColor: string = 'bg-purple-400';
  @Input() title: string = 'Counts';
  @Input() totalCount: string = '';
}
