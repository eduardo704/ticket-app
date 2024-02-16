import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventResponse } from './events.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(params = {}) {
    return this.http
      .get<EventResponse>(
        'https://app.ticketmaster.com/discovery/v2/events?apikey=6GYlo0Ua2RJPGGGRp7ry3bjOmlU0NV2c',
        { params }
      )
      .pipe(
        map((response) => {
          const events = response._embedded.events;
          return events.map((event) => {
            const image = event.images[0].url || '';
            const date = event.dates.start.dateTime || '';
            const locationName = event._embedded.venues[0].name || '';

            return { name: event.name, image, date, locationName };
          });
        })
      );
  }
}
