import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { mockResponse } from './_testing/events.mock';

describe('EventsService', () => {
  let service: EventsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(EventsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('get Countries should work', (done) => {
    expect(service).toBeTruthy();

    service.getEvents({ countryCode: 'US' }).subscribe((events) => {
      console.log(test)
      expect(events.length).toEqual(20);
      const event = events[0];
      expect(event.image).toEqual('mockIMgUrl');
      expect(event.name).toEqual('test event');
      expect(event.locationName).toEqual('location');
      expect(event.date).toEqual('2024-04-14T19:30:00Z');

      done();
    });

    // Check for correct requests: should have made one request to POST search from expected URL
    const req = httpTestingController.expectOne(
      'https://app.ticketmaster.com/discovery/v2/events?apikey=6GYlo0Ua2RJPGGGRp7ry3bjOmlU0NV2c&countryCode=US'
    );

    req.flush(mockResponse);
    httpTestingController.verify();
  });
});
