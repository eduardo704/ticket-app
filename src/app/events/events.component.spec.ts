import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsService } from './events.service';
import { of } from 'rxjs';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: EventsService,
          useValue: {
            getEvents: jest.fn().mockReturnValue(of([])),
            getCountries: jest.fn().mockReturnValue([of([])]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
