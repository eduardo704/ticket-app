import { Observable, take } from 'rxjs';
import { EventsService } from './events.service';
import { Component, OnInit } from '@angular/core';
import { Event, Start } from './events.model';
import { Country } from './country.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;
  countries: Country[];
  form: FormGroup;

  fromMin = DateTime.now().toISODate();
  fromMax = null;

  endMin = null;

  constructor(private eventsService: EventsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((events) => console.log(events));

    this.countries = this.eventsService.getCountries();

    this.events$ = this.eventsService.getEvents().pipe(take(1));

    this.form = this.fb.group({
      countryCode: [''],
      city: [''],
      startDateTime: [new Date()],
      endDateTime: [new Date()],
    });

    this.form.valueChanges.subscribe((val) => {
      this.fromMax = val.endDateTime;
      this.endMin = val.startDateTime;
    });
  }

  submit() {
    const val = this.form.value;

    const start =
      DateTime.fromISO(val.startDateTime).toUTC().toISO()?.slice(0, -5)+'Z' || '';
    const end =
      DateTime.fromISO(val.endDateTime).toUTC().toISO()?.slice(0, -5) +'Z'|| '';

    this.events$ = this.eventsService
      .getEvents({
        ...val,
        startDateTime: start,
        endDateTime: end,
      })
      .pipe(take(1));
  }
}
