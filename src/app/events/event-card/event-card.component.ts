import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MappedEvent } from '../events.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() item: MappedEvent;
}
