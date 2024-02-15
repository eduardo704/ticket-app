import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventResponse } from './events.model';
import { map } from 'rxjs';
import countries from 'world-countries';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(params={} ) {
    return this.http
      .get<EventResponse>(
        'https://app.ticketmaster.com/discovery/v2/events?apikey=6GYlo0Ua2RJPGGGRp7ry3bjOmlU0NV2c', {params}
      )
      .pipe(map((response) => {
        return response._embedded.events;
      }));
  }


}
