import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateTime } from 'luxon';
import { Observable, Subscription, take, tap } from 'rxjs';
import { CountriesService } from '../common/services/countries.service';
import { Country } from './country.model';
import { MappedEvent } from './events.model';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit, OnDestroy {
  events$: Observable<MappedEvent[]>;
  countries: Country[];
  form: FormGroup;

  fromMin = DateTime.now().toISODate();
  fromMax = '';

  endMin = '';

  formSubscription: Subscription;

  constructor(
    private eventsService: EventsService,
    private countriesService: CountriesService,
    private fb: FormBuilder
  ) {}

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.countries = this.countriesService.getCountries();

    this.getNewEvents({});

    this.setUpForm();

    this.watchFormChanges();
  }

  submit() {
    const val = this.form.value;

    const start = this.getFormatedDate(val.startDateTime);
    const end = this.getFormatedDate(val.endDateTime);

    this.getNewEvents({
      ...val,
      startDateTime: start,
      endDateTime: end,
    });
  }

  private getNewEvents(params: object) {
    this.events$ = this.eventsService.getEvents({ ...params }).pipe(take(1));
  }

  private getFormatedDate(val: string) {
    const date = DateTime.fromISO(val).toUTC().toISO()?.slice(0, -5) || '';
    if (date) {
      return date + 'Z';
    }
    return date;
  }

  private setUpForm() {
    this.form = this.fb.group({
      countryCode: [''],
      city: [''],
      startDateTime: [new Date()],
      endDateTime: [new Date()],
    });
  }

  private watchFormChanges() {
    this.formSubscription = this.form.valueChanges.subscribe((val) => {
      this.fromMax = val.endDateTime;
      this.endMin = val.startDateTime;
    });
  }
}
