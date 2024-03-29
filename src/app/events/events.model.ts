// Generated by https://quicktype.io
export interface MappedEvent {
  name: string;
  image: string;
  date: string;
  locationName: string;
}

export interface EventResponse {
  _embedded: EventResponseEmbedded;
  _links: EventResponseLinks;
  page: Page;
}

export interface EventResponseEmbedded {
  events: Event[];
}

export interface Event {
  name: string;
  type: EventType;
  id: string;
  test: boolean;
  url: string;
  locale: Locale;
  images: Image[];
  sales: Sales;
  dates: Dates;
  classifications: Classification[];
  outlets?: Outlet[];
  seatmap?: Seatmap;
  ticketing: Ticketing;
  _links: EventLinks;
  _embedded: EventEmbedded;
  promoter?: Promoter;
  promoters?: Promoter[];
  pleaseNote?: string;
  priceRanges?: PriceRange[];
  accessibility?: Accessibility;
  ticketLimit?: TicketLimit;
  ageRestrictions?: AgeRestrictions;
  info?: string;
  products?: Product[];
}

export interface EventEmbedded {
  venues: Venue[];
  attractions: Attraction[];
}

export interface Attraction {
  name: string;
  type: AttractionType;
  id: string;
  test: boolean;
  url: string;
  locale: Locale;
  externalLinks: ExternalLinks;
  images: Image[];
  classifications: Classification[];
  upcomingEvents: { [key: string]: number };
  _links: AttractionLinks;
  aliases?: string[];
}

export interface AttractionLinks {
  self: First;
}

export interface First {
  href: string;
}

export interface Classification {
  primary: boolean;
  segment: Genre;
  genre: Genre;
  subGenre: Genre;
  type?: Genre;
  subType?: Genre;
  family: boolean;
}

export interface Genre {
  id: string;
  name: string;
}

export interface ExternalLinks {
  twitter?: Facebook[];
  wiki?: Facebook[];
  facebook: Facebook[];
  instagram?: Facebook[];
  homepage: Facebook[];
  youtube?: Facebook[];
  itunes?: Facebook[];
  lastfm?: Facebook[];
  spotify?: Facebook[];
  musicbrainz?: Musicbrainz[];
}

export interface Facebook {
  url: string;
}

export interface Musicbrainz {
  id: string;
}

export interface Image {
  ratio?: Ratio;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
  attribution?: string;
}

export enum Ratio {
  The16_9 = '16_9',
  The3_2 = '3_2',
  The4_3 = '4_3',
}

export enum Locale {
  EnUs = 'en-us',
}

export enum AttractionType {
  Attraction = 'attraction',
}

export interface Venue {
  name: string;
  type: VenueType;
  id: string;
  test: boolean;
  locale: Locale;
  postalCode: string;
  timezone: Timezone;
  city: City;
  state: State;
  country: Country;
  address: Address;
  location: Location;
  dmas: DMA[];
  upcomingEvents: UpcomingEvents;
  _links: AttractionLinks;
  url?: string;
  images?: Image[];
  markets?: Genre[];
  boxOfficeInfo?: BoxOfficeInfo;
  parkingDetail?: string;
  accessibleSeatingDetail?: string;
  generalInfo?: GeneralInfo;
  ada?: Ada;
  aliases?: string[];
  social?: Social;
}

export interface Ada {
  adaPhones: string;
  adaCustomCopy: string;
  adaHours: string;
}

export interface Address {
  line1: string;
}

export interface BoxOfficeInfo {
  phoneNumberDetail?: string;
  openHoursDetail: string;
  acceptedPaymentDetail?: string;
  willCallDetail?: string;
}

export interface City {
  name: string;
}

export interface Country {
  name: CountryName;
  countryCode: CountryCode;
}

export enum CountryCode {
  Us = 'US',
}

export enum CountryName {
  UnitedStatesOfAmerica = 'United States Of America',
}

export interface DMA {
  id: number;
}

export interface GeneralInfo {
  generalRule?: string;
  childRule?: string;
}

export interface Location {
  longitude: string;
  latitude: string;
}

export interface Social {
  twitter: Twitter;
}

export interface Twitter {
  handle: string;
}

export interface State {
  name: string;
  stateCode: string;
}

export enum Timezone {
  AmericaChicago = 'America/Chicago',
  AmericaLosAngeles = 'America/Los_Angeles',
  AmericaNewYork = 'America/New_York',
  AmericaPhoenix = 'America/Phoenix',
}

export enum VenueType {
  Venue = 'venue',
}

export interface UpcomingEvents {
  tmr?: number;
  _total: number;
  _filtered: number;
  ticketmaster?: number;
}

export interface EventLinks {
  self: First;
  attractions: First[];
  venues: First[];
}

export interface Accessibility {
  info?: string;
  ticketLimit?: number;
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean;
}

export interface Dates {
  start: Start;
  status: Status;
  spanMultipleDays: boolean;
  timezone?: Timezone;
}

export interface Start {
  localDate: string;
  localTime: string;
  dateTime: string;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export interface Status {
  code: Code;
}

export enum Code {
  Onsale = 'onsale',
}

export interface Outlet {
  url: string;
  type: string;
}

export interface PriceRange {
  type: PriceRangeType;
  currency: Currency;
  min: number;
  max: number;
}

export enum Currency {
  Usd = 'USD',
}

export enum PriceRangeType {
  Standard = 'standard',
}

export interface Product {
  name: string;
  id: string;
  url: string;
  type: ProductType;
  classifications: Classification[];
}

export enum ProductType {
  Parking = 'Parking',
  Upsell = 'Upsell',
}

export interface Promoter {
  id: string;
  name: PromoterName;
  description: Description;
}

export enum Description {
  LiveNationMusicNtlUsa = 'LIVE NATION MUSIC / NTL / USA',
  NbaRegularSeasonNtlUsa = 'NBA REGULAR SEASON / NTL / USA',
  PromotedByVenueNtlUsa = 'PROMOTED BY VENUE / NTL / USA',
}

export enum PromoterName {
  LiveNationMusic = 'LIVE NATION MUSIC',
  NbaRegularSeason = 'NBA REGULAR SEASON',
  PromotedByVenue = 'PROMOTED BY VENUE',
}

export interface Sales {
  public: Public;
  presales?: Presale[];
}

export interface Presale {
  startDateTime: string;
  endDateTime: string;
  name: string;
}

export interface Public {
  startDateTime: string;
  startTBD: boolean;
  startTBA: boolean;
  endDateTime: string;
}

export interface Seatmap {
  staticUrl: string;
}

export interface TicketLimit {
  info: string;
}

export interface Ticketing {
  allInclusivePricing: AllInclusivePricing;
  safeTix?: AllInclusivePricing;
}

export interface AllInclusivePricing {
  enabled: boolean;
}

export enum EventType {
  Event = 'event',
}

export interface EventResponseLinks {
  first: First;
  self: First;
  next: First;
  last: First;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
