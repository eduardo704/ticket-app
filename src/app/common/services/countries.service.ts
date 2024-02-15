import { Injectable } from '@angular/core';
import countries from 'world-countries';
import { Country } from '../../events/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  getCountries(): Country[] {
    const formattedCountries = countries
      .map((country) => ({
        value: country.cca2,
        label: country.name.common,
        flag: country.flag,
        region: country.region,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    return formattedCountries;
  }
}
