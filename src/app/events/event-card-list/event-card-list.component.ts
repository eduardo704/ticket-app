import { Component, Input } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-card-list',
  standalone: true,
  imports: [EventCardComponent, CommonModule],
  templateUrl: './event-card-list.component.html',
  styleUrl: './event-card-list.component.scss',
})
export class EventCardListComponent {
  @Input() events: any[];
}
