import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCountries should work', () => {
    const countries = service.getCountries();
    expect(countries.length).toEqual(250);
    expect(countries.find((country) => country.value === 'US')).toBeTruthy();
    expect(countries[0].value).toEqual('AF')
  });
});
