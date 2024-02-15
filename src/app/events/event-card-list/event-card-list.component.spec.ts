import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardListComponent } from './event-card-list.component';
import { EventCardComponent } from '../event-card/event-card.component';

describe('EventCardListComponent', () => {
  let component: EventCardListComponent;
  let fixture: ComponentFixture<EventCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardListComponent, EventCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardListComponent);
    component = fixture.componentInstance;
    component.events=[]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
