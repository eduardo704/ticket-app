import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsService } from './events.service';
import { of } from 'rxjs';
import { EventCardListComponent } from './event-card-list/event-card-list.component';
import { mockMapped } from './_testing/events.mock';
import { CountriesService } from '../common/services/countries.service';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let eventsService: EventsService;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsComponent],
      imports: [ReactiveFormsModule, EventCardListComponent],
      providers: [
        {
          provide: EventsService,
          useValue: {
            getEvents: jest.fn().mockReturnValue(of(mockMapped)),
          },
        },
        CountriesService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
    eventsService = TestBed.inject(EventsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize correctly', (done) => {
    component.events$.subscribe((events) => {
      expect(events.length).toEqual(20);
      done();
    });

    expect(component.form.value).toBeTruthy();
    expect(component.countries.length).toEqual(250);
  });

  it('Submit Should work', () => {
    component.form.setValue({
      countryCode: 'US',
      city: 'Miami',
      startDateTime: '2024-02-21',
      endDateTime: '2024-02-25',
    });

    const spy = jest.spyOn(eventsService, 'getEvents');

    component.submit();
    expect(spy).toHaveBeenCalledWith({
      countryCode: 'US',
      city: 'Miami',
      startDateTime: '2024-02-21T03:00:00Z',
      endDateTime: '2024-02-25T03:00:00Z',
    });

    expect(component.form.value).toBeTruthy();
    expect(component.countries.length).toEqual(250);
  });
});
