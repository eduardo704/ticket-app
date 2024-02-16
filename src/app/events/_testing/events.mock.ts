export const mockResponse = {
  _embedded: {
    events: [
      {
        name: 'test event',
        type: 'event',
        id: 'Z7r9jZ1AdJ9AK',
        test: false,
        url: 'https://www.ticketmaster.com/event/Z7r9jZ1AdJ9AK',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'mockIMgUrl',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
        ],

        dates: {
          start: {
            localDate: '2024-04-14',
            localTime: '14:30:00',
            dateTime: '2024-04-14T19:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },

        _embedded: {
          venues: [
            {
              name: 'location',
              type: 'venue',
              id: 'ZFr9jZe667',
              test: false,
              locale: 'en-us',
              postalCode: '55403',
              timezone: 'America/Chicago',
              city: {
                name: 'Minneapolis',
              },
              state: {
                name: 'Minnesota',
                stateCode: 'MN',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '600 First Ave. North',
              },
              location: {
                longitude: '-93.286102',
                latitude: '44.970299',
              },
              dmas: [
                {
                  id: 336,
                },
              ],
              upcomingEvents: {
                tmr: 66,
                _total: 66,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/ZFr9jZe667?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Charlotte Hornets vs. Phoenix Suns',
        type: 'event',
        id: 'G5eVZ9R6mXJ34',
        test: false,
        url: 'https://www.ticketmaster.com/charlotte-hornets-vs-phoenix-suns-charlotte-north-carolina-03-15-2024/event/2D005EF1EEFA6495',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: true,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-19T14:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-16T00:30:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-18T13:00:00Z',
              endDateTime: '2023-08-19T13:59:00Z',
              name: 'Partner Presale',
            },
            {
              startDateTime: '2023-08-18T17:00:00Z',
              endDateTime: '2023-08-19T13:59:00Z',
              name: 'Group Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-03-15',
            localTime: '19:00:00',
            dateTime: '2024-03-15T23:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/New_York',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        pleaseNote:
          'All Prices Include Applicable NC Sales Taxes For luxury seating options (including Suites/Royal Boxes/Terrace Tables), please call 704-HORNETS.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 39.0,
            max: 875.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/2D005EF1EEFA6495/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info: 'Wheelchair + Companion Seating: Located in all levels of the Coliseum based on event setup for particular event. \r\n\r\nMobility Impaired Patrons + Companion Seating :Located in all levels of the Coliseum based on event setup for particular event.',
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 14 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5eVZ9R6mXJ34?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9175Nnf?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZA6AEIA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Spectrum Center ',
              type: 'venue',
              id: 'KovZpZA6AEIA',
              test: false,
              url: 'https://www.ticketmaster.com/spectrum-center-tickets-charlotte/venue/369357',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/18670v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '28202',
              timezone: 'America/New_York',
              city: {
                name: 'Charlotte',
              },
              state: {
                name: 'North Carolina',
                stateCode: 'NC',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '333 East Trade Street',
              },
              location: {
                longitude: '-80.839921',
                latitude: '35.225222',
              },
              markets: [
                {
                  name: 'Charlotte',
                  id: '2',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
                {
                  name: 'South Carolina',
                  id: '121',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 243,
                },
                {
                  id: 245,
                },
                {
                  id: 256,
                },
                {
                  id: 278,
                },
                {
                  id: 291,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  '704-688-8600 For general group sales questions for Spectrum Center: 704.688.9047',
                openHoursDetail: "Friday's 10AM - 2PM",
                acceptedPaymentDetail:
                  'American Express, MasterCard, VISA, Discover Card',
              },
              parkingDetail:
                'Location: None. There are approx. 30,000 parking spaces within a 15 minute walk of Spectrum Center. Prices vary by lot.',
              accessibleSeatingDetail:
                'This venue is accessible. For sight impaired and hearing patrons please contact the Box Office. Spectrum Center is committed to providing every guest with a comfortable and enjoyable experience. The arena is one of the most accessible arenas in the U.S. Seating throughout the venue allows guests with accessible needs flexibility in seat locations and price levels.',
              generalInfo: {
                generalRule:
                  'Spectrum Center is committed to creating a safe, comfortable, and enjoyable sports and entertainment experience. Guests of Spectrum Center have a right to expect an environment where guests will: • Respect and appreciate each and every fan. • Be treated in a consistent, professional and courteous manner by all arena and team personnel. • Enjoy the arena experience free from disruptive behavior, including foul or abusive language or obscene gestures. • Consume alcoholic beverages in a responsible manner. Intervention with an impaired, intoxicated or underage guest will be handled in a prompt and safe manner • Sit only in ticketed seats and show tickets when requested. • Act in an appropriate manner without fighting, throwing objects or attempting to enter the court or stage area. • Smoke in designated smoking areas only. • Wear appropriate clothing and have signage that is free of any obscene or indecent messages. • Comply with requests from arena staff regarding arena operations and emergency response procedures. The arena staff has been trained to intervene where necessary to help ensure that the above expectations are met, and guests are encouraged to report any inappropriate behavior to the nearest event staff member. Guests who choose not to adhere to these provisions will be subject to ejection without refund and revocation of tickets and may also be in violation of the law resulting in possible arrest and prosecution.',
                childRule:
                  'Children 2 years or older must have a ticket for most events at the Spectrum Center. This age restriction can fluctuate from event to event.',
              },
              upcomingEvents: {
                tmr: 1,
                ticketmaster: 39,
                _total: 40,
                _filtered: 0,
              },
              ada: {
                adaPhones: '704-688-8600',
                adaCustomCopy:
                  'Wheelchair + Companion Seating: Located in all levels of the Arena based on event setup for particular event. \n\nMobility Impaired Patrons + Companion Seating :Located in all levels of the Arena based on event setup for particular event.\n\nSight/Hearing Patrons + Companions will be accommodated directly through the Arena Box Office.',
                adaHours: 'Fridays 10AM to 2PM ',
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZA6AEIA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Charlotte Hornets',
              type: 'attraction',
              id: 'K8vZ9175Nnf',
              test: false,
              url: 'https://www.ticketmaster.com/charlotte-hornets-tickets/artist/931493',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/hornets',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Charlotte_Hornets',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/hornets',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/hornets/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/hornets/',
                  },
                ],
              },
              aliases: ['charlotte bobcats'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: true,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 3,
                ticketmaster: 28,
                _total: 31,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9175Nnf?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Milwaukee Bucks vs. Phoenix Suns',
        type: 'event',
        id: 'vvG1jZ9sTtWKwe',
        test: false,
        url: 'https://www.ticketmaster.com/milwaukee-bucks-vs-phoenix-suns-milwaukee-wisconsin-03-17-2024/event/07005F1FE9F53C82',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: true,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-09-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-17T18:00:00Z',
          },
          presales: [
            {
              startDateTime: '2023-09-11T17:00:00Z',
              endDateTime: '2023-09-18T16:00:00Z',
              name: 'Bucks Member Presale',
            },
            {
              startDateTime: '2023-09-12T17:00:00Z',
              endDateTime: '2023-09-18T16:00:00Z',
              name: 'Bucks Preferred Presale',
            },
            {
              startDateTime: '2023-09-13T17:00:00Z',
              endDateTime: '2023-09-18T16:00:00Z',
              name: 'Bucks Presale',
            },
            {
              startDateTime: '2023-09-11T17:00:00Z',
              endDateTime: '2023-09-18T16:00:00Z',
              name: 'Bucks Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-03-17',
            localTime: '12:00:00',
            dateTime: '2024-03-17T17:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        pleaseNote:
          'The Fiserv Forum Ticket Office is open on event days from 12:00PM (or 3 hours prior to event, whichever is earliest) until approximately 1 hour into the event, and on Saturdays from 12:00PM until 4:00PM. The Ticket Office is closed on non-event weekdays and Sundays.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 76.0,
            max: 3930.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/07005F1FE9F53C82/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info: 'Accessible seating is available for wheelchairs and companions, as well as limited mobility and sight/hearing impaired.  There is a 4 ticket limit for all accessible seating, unless otherwise posted.  Companions should purchase wheelchair, limited mobility or sight/hearing impaired seats as companion seats.  All accessible patrons should purchase 1 accessible seat and can purchase up to 3 companion seats.',
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 6 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1jZ9sTtWKwe?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91718TV?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917A_fV?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Fiserv Forum',
              type: 'venue',
              id: 'KovZ917A_fV',
              test: false,
              url: 'https://www.ticketmaster.com/fiserv-forum-tickets-milwaukee/venue/57843',
              locale: 'en-us',
              postalCode: '53203',
              timezone: 'America/Chicago',
              city: {
                name: 'Milwaukee',
              },
              state: {
                name: 'Wisconsin',
                stateCode: 'WI',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1111 Vel R. Phillips Ave',
              },
              location: {
                longitude: '-87.916896',
                latitude: '43.04228',
              },
              markets: [
                {
                  name: 'Milwaukee and Wi',
                  id: '30',
                },
              ],
              dmas: [
                {
                  id: 288,
                },
                {
                  id: 313,
                },
                {
                  id: 328,
                },
                {
                  id: 335,
                },
                {
                  id: 411,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'To speak to a customer representative for the Fiserv Forum Ticket Office, call (414) 227-0511. Representatives are available Monday-Friday 9AM to 5:30PM. Alternatively, you can email at ticketing@bucks.com and a Ticket Office representative will get back to you within 1 business day. To book ADA seating for all events at Fiserv Forum, click the ADA icon on the event page on Ticketmaster.com. If you need further assistance with ADA Seating, please call Ticketmaster at 1-800-877-7575 to speak to an Accessible Seating Fan Support Specialist. For General Assistance with Ticketmaster tickets call 1-800-653-8000 to speak with Ticketmaster Customer Service',
                openHoursDetail:
                  'The Ticket Office is open on event days from 12:00pm (or 3 hours prior to event, whichever is earliest) until approximately 1 hour into the event, and on Saturdays from 12:00pm until 4:00pm. The Ticket Office is closed on non-event weekdays. The Ticket Office is located next to the main entrance to the arena, adjacent to the plaza (Vel R Phillips and Juneau). Any questions can be directed to our main line (414 227-0504 from 10AM-4PM.)',
                willCallDetail:
                  'Orders placed through Ticketmaster have standard delivery options available, including mobile delivery, standard and UPS mail. Will Call pickup is available day of event only. Please bring valid, corresponding ID with you for collection. *Please note that Print-at-Home is not be available as a delivery option for this venue.',
              },
              parkingDetail:
                'Advance parking at the 5th Street Parking Garage or Highland Parking Garage can be purchased during your checkout process when buying event tickets online as well as by purchasing from parking events that can be found by searching for 5th Street Parking or Highland Parking Garage on Ticketmaster.com.',
              accessibleSeatingDetail:
                'To book ADA seating for all events at Fiserv Forum, click the ADA icon on the event page on Ticketmaster.com. If you need further assistance, please call Ticketmaster at 1-800-877-7575 to speak to an Accessible Seating Fan Support Specialist or 1-800-653-8000 to speak with Ticketmaster Customer Service.',
              generalInfo: {
                childRule:
                  'For Bucks games and most concerts, children under the age of 2 years old will not require a ticket but will be required to sit on a ticketed guests lap. Family shows often have different restrictions. Call 414-227-0511 for details on specific events.',
              },
              upcomingEvents: {
                ticketmaster: 70,
                _total: 70,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917A_fV?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Milwaukee Bucks',
              type: 'attraction',
              id: 'K8vZ91718TV',
              test: false,
              url: 'https://www.ticketmaster.com/milwaukee-bucks-tickets/artist/805969',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/bucks',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Milwaukee_Bucks',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/milwaukeebucks',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/bucks/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/bucks/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: true,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 3,
                ticketmaster: 36,
                _total: 39,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91718TV?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Oklahoma City Thunder vs. Phoenix Suns',
        type: 'event',
        id: 'vvG1YZ9sZrEpDy',
        test: false,
        url: 'https://www.ticketmaster.com/oklahoma-city-thunder-vs-phoenix-suns-oklahoma-city-oklahoma-03-29-2024/event/0C005F101E9D6EF9',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: true,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-11-27T16:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-30T01:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-03-29',
            localTime: '19:00:00',
            dateTime: '2024-03-30T00:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        info: "Full contactless mobile ticketing has been implemented for guests to use self-serve ticket scanners at all arena entrances, reducing points of contact with staff. Mobile tickets for Thunder games can be seamlessly accessed or transferred via the Thunder App or mythunderaccount.com. Tickets for the 2023-24 season for games after December 31, 2023, will be available directly from the team starting Monday, November 27 at 10 a.m. Can't wait to purchase tickets? You can purchase tickets from other fans and prices are determined by the seller and not the team. A 20% service fee for all resale tickets will be added to the cost of each ticket at checkout. Children 3 years and older require a ticket for admission.",
        pleaseNote:
          "Full contactless mobile ticketing has been implemented for guests to use self-serve ticket scanners at all arena entrances, reducing points of contact with staff. Mobile tickets for Thunder games can be seamlessly accessed or transferred via the Thunder App or mythunderaccount.com. Tickets for the 2023-24 season for games after December 31, 2023, will be available directly from the team starting Monday, November 27 at 10 a.m. Can't wait to purchase tickets? You can purchase tickets from other fans and prices are determined by the seller and not the team. A 20% service fee for all resale tickets will be added to the cost of each ticket at checkout. Children 3 years and older require a ticket for admission.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 53.0,
            max: 2052.0,
          },
        ],
        products: [
          {
            name: 'Thunder Parking',
            id: 'vvG1YZ9sZLGkWd',
            url: 'https://www.ticketmaster.com/thunder-parking-oklahoma-city-oklahoma-03-29-2024/event/0C005F101F306F43',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/0C005F101E9D6EF9/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info: 'ADA Wheelchair and Companion seating is limited to 6 tickets. ADA ENHANCEMENTS ACTIVE',
          ticketLimit: 6,
        },
        ticketLimit: {
          info: 'There is an overall 10 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1YZ9sZrEpDy?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ917GCg7?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpa2Wre?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Paycom Center',
              type: 'venue',
              id: 'KovZpa2Wre',
              test: false,
              url: 'https://www.ticketmaster.com/paycom-center-tickets-oklahoma-city/venue/98958',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22211v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '73102',
              timezone: 'America/Chicago',
              city: {
                name: 'Oklahoma City',
              },
              state: {
                name: 'Oklahoma',
                stateCode: 'OK',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '100 West Reno',
              },
              location: {
                longitude: '-97.514594',
                latitude: '35.463391',
              },
              markets: [
                {
                  name: 'Oklahoma',
                  id: '125',
                },
              ],
              dmas: [
                {
                  id: 349,
                },
                {
                  id: 403,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Arena: 405-602-8700 Thunder Ticket Office: 405.208.HOOP (4667)',
                openHoursDetail:
                  "Paycom Center's Box Office is located just off West Reno between the two main entrances on the north side of the arena. Currently, it is temporarily closed on non-event days. On event days, the Box Office is open at 12pm (noon) on Mondays-Saturdays, or four hours prior to the event time on Sundays. Some events may have additional hours.",
                acceptedPaymentDetail:
                  'Paycom Center is a cashless venue. The Box Office accepts, Visa, MasterCard, American Express and Discover cards, as well as mobile wallet (Apple Pay, Google Pay) payments.',
                willCallDetail:
                  'When purchasing tickets by phone or online, you may choose to pick them up at the Box Office Will Call window on the day of the show. Please be prepared to present the credit card used to purchase the tickets, as well as a photo I.D. Press and VIP tickets, or tickets left by a third party, may also be picked up at Will Call on the day of the event. A photo I.D. is required.',
              },
              parkingDetail:
                'Parking is available just across the street from Paycom Center in the underground parking garage at the neighboring Prairie Surf Studios, which is managed by Republic Parking Systems. Parking garage entrances are located on the east side on E.K. Gaylord and the west side on N. Robinson. Parking spaces for disabled guests driving properly licensed or tagged vehicles and are located near all four elevator entrances. Additional parking is available throughout Downtown and Bricktown. There are more than 18,000 parking spaces including approximately 1,300 parking meters. For further information on Oklahoma City parking facilities, you may call (405) 235-PARK or visit www.parkingokc.com.',
              accessibleSeatingDetail:
                'Paycom Center meets or exceeds all structural and service requirements as stipulated by the Americans with Disabilities Act. Restrooms, drinking fountains, and concession counters are accessible to guests with disabilities. Additional services are listed below. Accessible Tickets/Seating: Wheelchair accessible seats are available in all price levels. Up to three companion tickets may be purchased with each wheelchair accessible ticket. Please indicate at the time of purchase if you require accessible seating. Accessible Drop-off: Passengers may be dropped off at Reno and Robinson near the northwest entrance to Paycom Center. Elevators: Elevators are located throughout the facility for wheelchair access to all levels. The elevators near Section 101, just inside the northwest entrance, provide access to the arena floor. Elevator on club level nearest Section 205. See the maps at the center of this guide for exact locations. Emergency Evacuation: Paycom Center staff members have been trained in emergency preparedness and evacuation procedures. Key employees are assigned to assist patrons with disabilities to safety. Listening Devices: Listening devices may be rented free of charge at the Guest Relations Desks located at each of the main entrances. A credit card or check deposit, as well as a valid I.D., are required to ensure the return of equipment. Parking: Accessible parking is available in the parking lots on the south side of Paycom Center. Entrances are available on S.W. 3rd Street, east of Robinson. Accessible parking spaces are also available in the underground parking garage at the neighboring Prairie Surf Studios. See Parking for additional information. Service Animals: Trained guide dogs or service animals are permitted to assist guests inside the arena. If special accommodations are required for your service animal, please notify us at the time of your ticket purchase. All other animals are prohibited. Sign Interpreters: Guests who require interpreting services during an event, should contact the Guest Relations Manager by calling (405) 602-8700 within three weeks of the event. Telephones: Telephones are provided at Guest Relations locations and throughout Paycom Center, courtesy of Cox Communications. TDD machines and volume-enhanced phones are available. Wheelchair Assistance: Paycom Center offers wheelchair service for guests who may need assistance to and from their seats. Please contact a Guest Relations representative for assistance. Wheelchair assistance is provided on a first-come, first-served basis. Due to the limited number of wheelchairs available, they may not be borrowed or rented as seating during the event. If wheelchair assistance becomes necessary during an event, please notify the nearest staff member.',
              generalInfo: {
                generalRule:
                  'For your safety, once a person exits Paycom Center, re-entry is strictly prohibited. For safety reasons, prohibited items include but are not limited to: - Alcohol, illegal drugs or any paraphernalia associated with drug use - Cans, bottles, coolers or other similar containers - Fireworks - Flags/Signs with poles - Laser pens/pointers of any type - Noisemakers such as air horns - Outside food or drinks - Oversized bags, including backpacks, duffel bags or diaper bags - Weapons of any type, including chains, knives and firearms - Any other item deemed unacceptable by event or building management For safety reasons, prohibited items include but are not limited to: - Alcohol, illegal drugs or any paraphernalia associated with drug use - Cans, bottles, coolers or other similar containers - Fireworks - Flags/Signs with poles - Laser pens/pointers of any type - Noisemakers such as air horns - Outside food or drinks - Oversized bags, including backpacks, duffel bags or diaper bags - Weapons of any type, including chains, knives and firearms - Any other item deemed unacceptable by event or building management',
                childRule:
                  'Most events do not require a ticket for children under the age of two. However, in order for a child to have his or her own seat, a ticket is required. Some shows intended for young children do require children over the age of one to have a ticket. Please call (405) 602-8700 in advance to verify the policy for a specific event.',
              },
              upcomingEvents: {
                tmr: 2,
                ticketmaster: 39,
                _total: 41,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpa2Wre?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Oklahoma City Thunder',
              type: 'attraction',
              id: 'K8vZ917GCg7',
              test: false,
              url: 'https://www.ticketmaster.com/oklahoma-city-thunder-tickets/artist/1250512',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/okcthunder',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Oklahoma_City_Thunder',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/OKCThunder',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/okcthunder/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/thunder/',
                  },
                ],
              },
              aliases: ['OKC Thunder'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: true,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 2,
                ticketmaster: 27,
                _total: 29,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917GCg7?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Phoenix Suns vs. Oklahoma City Thunder',
        type: 'event',
        id: 'G5v0Z9Yc3nOzZ',
        test: false,
        url: 'https://www.ticketmaster.com/phoenix-suns-vs-oklahoma-city-thunder-phoenix-arizona-03-03-2024/event/19005F0B52AA0E00',
        locale: 'en-us',
        images: [
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
            width: 2048,
            height: 1152,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-04T03:30:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: 'SMS Presale',
            },
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: '68 Reserve Presale',
            },
            {
              startDateTime: '2023-08-17T19:00:00Z',
              endDateTime: '2024-03-04T04:30:00Z',
              name: 'Resale Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-03-03',
            localTime: '19:30:00',
            dateTime: '2024-03-04T02:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Phoenix',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        info: "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        pleaseNote:
          "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 34.0,
            max: 3870.0,
          },
        ],
        products: [
          {
            name: 'PARKWHIZ FOOTPRINT CENTER',
            id: 'G5v0Z9YysrYDp',
            url: 'https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-03-03-2024/event/19005F0E717B0ED6',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/19005F0B52AA0E00/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall four (4) ticket limit for presales and first day of general onsale. Standard ticket limit is six (6).',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5v0Z9Yc3nOzZ?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ917GCg7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Footprint Center',
              type: 'venue',
              id: 'KovZpZAE617A',
              test: false,
              url: 'https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22218v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '85004',
              timezone: 'America/Phoenix',
              city: {
                name: 'Phoenix',
              },
              state: {
                name: 'Arizona',
                stateCode: 'AZ',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '201 East Jefferson Street',
              },
              location: {
                longitude: '-112.071313',
                latitude: '33.445899',
              },
              markets: [
                {
                  name: 'Phoenix and Tucson',
                  id: '36',
                },
              ],
              dmas: [
                {
                  id: 359,
                },
                {
                  id: 402,
                },
                {
                  id: 420,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867',
                openHoursDetail:
                  'The Footprint Center ticket office will be open at 3pm on weekday events and three (3) hours prior to event time for weekends. For any further questions or ticket inquiries, please reach out to feedback@suns.com or call the Footprint Center ticket office at (602) 379-7800.',
                acceptedPaymentDetail:
                  'The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS',
                willCallDetail:
                  'The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up.',
              },
              parkingDetail:
                'Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472',
              accessibleSeatingDetail:
                'PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.',
              generalInfo: {
                generalRule:
                  'New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than "assisting" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed',
                childRule:
                  'Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games.',
              },
              upcomingEvents: {
                ticketmaster: 70,
                _total: 70,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
            {
              name: 'Oklahoma City Thunder',
              type: 'attraction',
              id: 'K8vZ917GCg7',
              test: false,
              url: 'https://www.ticketmaster.com/oklahoma-city-thunder-tickets/artist/1250512',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/okcthunder',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Oklahoma_City_Thunder',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/OKCThunder',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/okcthunder/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/thunder/',
                  },
                ],
              },
              aliases: ['OKC Thunder'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: true,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 2,
                ticketmaster: 27,
                _total: 29,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917GCg7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'New Orleans Pelicans vs. Phoenix Suns',
        type: 'event',
        id: 'Z7r9jZ1AdJ9uI',
        test: false,
        url: 'https://www.ticketmaster.com/event/Z7r9jZ1AdJ9uI',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_SOURCE',
            width: 2048,
            height: 1152,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '1900-01-01T18:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-04-02T00:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-04-01',
            localTime: '19:00:00',
            dateTime: '2024-04-02T00:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            family: false,
          },
        ],
        outlets: [
          {
            url: 'https://www.ticketmaster.com/new-orleans-pelicans-vs-phoenix-suns-new-orleans-louisiana-04-01-2024/event/Zu0FM1R0e5tf1BK',
            type: 'tmMarketPlace',
          },
        ],
        seatmap: {
          staticUrl:
            'https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/1191-153-3-0-SmoothieKingCenterNOPelicans79303.png',
        },
        ticketing: {
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/Z7r9jZ1AdJ9uI?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oaV?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/ZFr9jZee1e?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Smoothie King Center',
              type: 'venue',
              id: 'ZFr9jZee1e',
              test: false,
              locale: 'en-us',
              postalCode: '70113',
              timezone: 'America/Chicago',
              city: {
                name: 'New Orleans',
              },
              state: {
                name: 'Louisiana',
                stateCode: 'LA',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1501 Dave Dixon Drive',
              },
              location: {
                longitude: '-90.082802',
                latitude: '29.9429',
              },
              dmas: [
                {
                  id: 344,
                },
              ],
              upcomingEvents: {
                tmr: 14,
                ticketmaster: 21,
                _total: 35,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/ZFr9jZee1e?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'New Orleans Pelicans',
              type: 'attraction',
              id: 'K8vZ9171oaV',
              test: false,
              url: 'https://www.ticketmaster.com/new-orleans-pelicans-tickets/artist/805910',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'http://www.twitter.com/pelicansnba',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/New_Orleans_Pelicans',
                  },
                ],
                facebook: [
                  {
                    url: 'http://www.facebook.com/pelicansnba',
                  },
                ],
                instagram: [
                  {
                    url: 'http://www.instagram.com/pelicansnba',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/pelicans/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 14,
                ticketmaster: 14,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oaV?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Phoenix Suns vs. New Orleans Pelicans',
        type: 'event',
        id: 'G5v0Z9Yc3YZz9',
        test: false,
        url: 'https://www.ticketmaster.com/phoenix-suns-vs-new-orleans-pelicans-phoenix-arizona-04-07-2024/event/19005F0B52C00E17',
        locale: 'en-us',
        images: [
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
            width: 2048,
            height: 1152,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-04-07T23:00:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: 'SMS Presale',
            },
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: '68 Reserve Presale',
            },
            {
              startDateTime: '2023-08-17T19:00:00Z',
              endDateTime: '2024-04-08T00:00:00Z',
              name: 'Resale Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-04-07',
            localTime: '15:00:00',
            dateTime: '2024-04-07T22:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Phoenix',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        info: "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        pleaseNote:
          "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 54.0,
            max: 3870.0,
          },
        ],
        products: [
          {
            name: 'PARKWHIZ FOOTPRINT CENTER',
            id: 'G5v0Z9YyscZHZ',
            url: 'https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-04-07-2024/event/19005F0E71B40F00',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/19005F0B52C00E17/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall four (4) ticket limit for presales and first day of general onsale. Standard ticket limit is six (6).',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5v0Z9Yc3YZz9?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oaV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Footprint Center',
              type: 'venue',
              id: 'KovZpZAE617A',
              test: false,
              url: 'https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22218v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '85004',
              timezone: 'America/Phoenix',
              city: {
                name: 'Phoenix',
              },
              state: {
                name: 'Arizona',
                stateCode: 'AZ',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '201 East Jefferson Street',
              },
              location: {
                longitude: '-112.071313',
                latitude: '33.445899',
              },
              markets: [
                {
                  name: 'Phoenix and Tucson',
                  id: '36',
                },
              ],
              dmas: [
                {
                  id: 359,
                },
                {
                  id: 402,
                },
                {
                  id: 420,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867',
                openHoursDetail:
                  'The Footprint Center ticket office will be open at 3pm on weekday events and three (3) hours prior to event time for weekends. For any further questions or ticket inquiries, please reach out to feedback@suns.com or call the Footprint Center ticket office at (602) 379-7800.',
                acceptedPaymentDetail:
                  'The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS',
                willCallDetail:
                  'The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up.',
              },
              parkingDetail:
                'Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472',
              accessibleSeatingDetail:
                'PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.',
              generalInfo: {
                generalRule:
                  'New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than "assisting" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed',
                childRule:
                  'Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games.',
              },
              upcomingEvents: {
                ticketmaster: 70,
                _total: 70,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
            {
              name: 'New Orleans Pelicans',
              type: 'attraction',
              id: 'K8vZ9171oaV',
              test: false,
              url: 'https://www.ticketmaster.com/new-orleans-pelicans-tickets/artist/805910',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'http://www.twitter.com/pelicansnba',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/New_Orleans_Pelicans',
                  },
                ],
                facebook: [
                  {
                    url: 'http://www.facebook.com/pelicansnba',
                  },
                ],
                instagram: [
                  {
                    url: 'http://www.instagram.com/pelicansnba',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/pelicans/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 14,
                ticketmaster: 14,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oaV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'San Antonio Spurs vs. Phoenix Suns',
        type: 'event',
        id: 'G5dIZ9YmSWNWP',
        test: false,
        url: 'https://www.ticketmaster.com/san-antonio-spurs-vs-phoenix-suns-san-antonio-texas-03-23-2024/event/3A005F0BB3F63F65',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-18T15:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-24T01:30:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-17T19:30:00Z',
              endDateTime: '2023-08-18T03:00:00Z',
              name: 'Resale Onsale',
            },
            {
              startDateTime: '2023-08-17T22:00:00Z',
              endDateTime: '2023-08-18T14:59:00Z',
              name: 'Fan Club Presale',
            },
            {
              startDateTime: '2023-08-18T00:00:00Z',
              endDateTime: '2023-08-18T14:59:00Z',
              name: 'AT&T Center Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-03-23',
            localTime: '19:00:00',
            dateTime: '2024-03-24T00:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        info: 'Ages two and up require a ticket. Doors open one hour before tip. Note that the address on the account must be from the South Central Texas region. Any accounts with an out-of-region address or a P.O. Box address may have their tickets cancelled and refunded without notice.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 60.0,
            max: 3402.0,
          },
        ],
        products: [
          {
            name: 'Frost Bank Center Parking: San Antonio Spurs',
            id: 'G5dIZ9Ymy_75b',
            url: 'https://www.ticketmaster.com/frost-bank-center-parking-san-antonio-san-antonio-texas-03-23-2024/event/3A005F0BB96442D8',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/3A005F0BB3F63F65/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info: 'Wheelchair Accessible and Limited Mobility seats are subject to availability. The type of seat is noted when the seat location is selected.  There is a limit of 4 ADA seats per transaction.',
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5dIZ9YmSWNWP?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ov0?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAJJEdA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Frost Bank Center',
              type: 'venue',
              id: 'KovZpZAJJEdA',
              test: false,
              url: 'https://www.ticketmaster.com/frost-bank-center-tickets-san-antonio/venue/475590',
              locale: 'en-us',
              aliases: ['AT&T Center'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22906v.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              postalCode: '78219',
              timezone: 'America/Chicago',
              city: {
                name: 'San Antonio',
              },
              state: {
                name: 'Texas',
                stateCode: 'TX',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1 Frost Bank Center Drive',
              },
              location: {
                longitude: '-98.4337987',
                latitude: '29.4330386',
              },
              markets: [
                {
                  name: 'San Antonio and Austin',
                  id: '40',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
                {
                  name: 'South Texas',
                  id: '122',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 222,
                },
                {
                  id: 260,
                },
                {
                  id: 293,
                },
                {
                  id: 318,
                },
                {
                  id: 379,
                },
                {
                  id: 380,
                },
                {
                  id: 407,
                },
              ],
              social: {
                twitter: {
                  handle: '@frostbankcenter',
                },
              },
              boxOfficeInfo: {
                phoneNumberDetail: '(210) 444-5870',
                openHoursDetail:
                  'Open Event Days Only. Open 3 hours prior to event time. All Frost Bank Center event tickets can also be purchased at www.ticketmaster.com or the Ticketmaster App.',
                acceptedPaymentDetail:
                  'All valid debit and credit cards as well as the digital payment wallets Apple Pay and Google Pay',
                willCallDetail:
                  'The box office is Open Event Days Only starting 3 hours prior to event time. Will call tickets may be picked at the Frost Bank Center Box Office. Policies for will call for each event may vary.',
              },
              parkingDetail:
                'Onsite parking is available in Lots 1, 2,3,4, 5 and 6 and is sold based on availability by event. Parking passes can be purchased online at www.ticketmaster.com or the Ticketmaster App. Limited availability is sold at the Frost Bank Center Box Office. If guests have not pre-purchased parking, some lots may be available to purchase on arrival. Prices range from $15 to $25 based on event. All parking transactions are valid debit and credit cards only.',
              accessibleSeatingDetail:
                'Frost Bank Center is an accessible venue. Accessible seating tickets can be purchased online at www.ticketmaster.com or the Ticketmaster App. A limited number of accessible seating tickets can be purchased at the Frost Bank Center Box Office, Open Event Days Only, opens 3 hours prior to event time. Certified service animals for guests with disabilities are welcome at the Frost Bank Center and must remain on leash or in a harness. If interpretive services are needed, please contact a Fan Experience coordinator at 210-444-5140 a minimum of three weeks prior to the event so appropriate accommodations can be made. Interpreters are provided free of charge, but event tickets are required prior to scheduling.',
              generalInfo: {
                generalRule:
                  'The safety of our fans, partners, staff, players, and coaches in attendance remains Spurs Sports & Entertainments top priority. Guests in attendance will be required to wear masks, maintain physical distancing, undergo temperature checks and complete a health screening through the CLEAR app prior to entering. SS&E has made numerous safety and health changes to policies, procedures, and operations within the Frost Bank Center. For a full list of enhanced updates and protocols, please visit our website www.frostbankcenter.com/arena/ourcommitment. No professional cameras or video equipment may be brought into the arena. All bags are subject to security search, bags up to 6in x 8in in size with a maximum of one compartment are permitted into the arena. For all other bags, fans may utilize two Binbox storage locations conveniently located outside of the East and Courtyard entrances at the Frost Bank Center. Doors open for most Frost Bank Center events one hour prior to event time. Spurs Sports & Entertainment has designated the Frost Bank Center as a tobacco and smoke-free building. The new policy includes all forms of smoking and tobacco use, including but not limited to, cigarettes, cigars, electronic cigarettes, personal vaporizers, smokeless tobacco and tobacco pipes. There will be no designated smoking areas anywhere inside the Frost Bank Center. The tobacco and smoke-free environment extends 500 feet from the Frost Bank Center.',
                childRule:
                  'Yes. For most Frost Bank Center events (some family shows may be excluded) children 2 years and older are required to have a ticket.',
              },
              upcomingEvents: {
                ticketmaster: 80,
                _total: 80,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAJJEdA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'San Antonio Spurs',
              type: 'attraction',
              id: 'K8vZ9171ov0',
              test: false,
              url: 'https://www.ticketmaster.com/san-antonio-spurs-tickets/artist/806012',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/spurs',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/San_Antonio_Spurs',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/Spurs',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/spurs/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/spurs/',
                  },
                ],
              },
              aliases: [
                'san antonio spurs ticket exchange',
                'spurs exchange',
                'spurs ticket exchange',
              ],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 22,
                _total: 27,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ov0?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Phoenix Suns vs. Minnesota Timberwolves',
        type: 'event',
        id: 'G5v0Z9Yc3R8zK',
        test: false,
        url: 'https://www.ticketmaster.com/phoenix-suns-vs-minnesota-timberwolves-phoenix-arizona-04-05-2024/event/19005F0B52BD0E13',
        locale: 'en-us',
        images: [
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
            width: 2048,
            height: 1152,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-04-06T03:00:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: 'SMS Presale',
            },
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: '68 Reserve Presale',
            },
            {
              startDateTime: '2023-08-17T19:00:00Z',
              endDateTime: '2024-04-06T04:00:00Z',
              name: 'Resale Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-04-05',
            localTime: '19:00:00',
            dateTime: '2024-04-06T02:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Phoenix',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        info: "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        pleaseNote:
          "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 64.0,
            max: 4300.0,
          },
        ],
        products: [
          {
            name: 'PARKWHIZ FOOTPRINT CENTER',
            id: 'G5v0Z9YysI8DX',
            url: 'https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-04-05-2024/event/19005F0E71A10EFE',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/19005F0B52BD0E13/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall four (4) ticket limit for presales and first day of general onsale. Standard ticket limit is six (6).',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5v0Z9Yc3R8zK?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171o10?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Footprint Center',
              type: 'venue',
              id: 'KovZpZAE617A',
              test: false,
              url: 'https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22218v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '85004',
              timezone: 'America/Phoenix',
              city: {
                name: 'Phoenix',
              },
              state: {
                name: 'Arizona',
                stateCode: 'AZ',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '201 East Jefferson Street',
              },
              location: {
                longitude: '-112.071313',
                latitude: '33.445899',
              },
              markets: [
                {
                  name: 'Phoenix and Tucson',
                  id: '36',
                },
              ],
              dmas: [
                {
                  id: 359,
                },
                {
                  id: 402,
                },
                {
                  id: 420,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867',
                openHoursDetail:
                  'The Footprint Center ticket office will be open at 3pm on weekday events and three (3) hours prior to event time for weekends. For any further questions or ticket inquiries, please reach out to feedback@suns.com or call the Footprint Center ticket office at (602) 379-7800.',
                acceptedPaymentDetail:
                  'The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS',
                willCallDetail:
                  'The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up.',
              },
              parkingDetail:
                'Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472',
              accessibleSeatingDetail:
                'PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.',
              generalInfo: {
                generalRule:
                  'New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than "assisting" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed',
                childRule:
                  'Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games.',
              },
              upcomingEvents: {
                ticketmaster: 70,
                _total: 70,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
            {
              name: 'Minnesota Timberwolves',
              type: 'attraction',
              id: 'K8vZ9171o10',
              test: false,
              url: 'https://www.ticketmaster.com/minnesota-timberwolves-tickets/artist/805971',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/timberwolves',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Minnesota_Timberwolves',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/MNTimberwolves',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/timberwolves',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/timberwolves/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: true,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 21,
                ticketmaster: 7,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171o10?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Phoenix Suns vs. Atlanta Hawks',
        type: 'event',
        id: 'G5v0Z9Yc3cOzG',
        test: false,
        url: 'https://www.ticketmaster.com/phoenix-suns-vs-atlanta-hawks-phoenix-arizona-03-21-2024/event/19005F0B52B60E0C',
        locale: 'en-us',
        images: [
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
            width: 2048,
            height: 1152,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-18T17:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-22T03:30:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: 'SMS Presale',
            },
            {
              startDateTime: '2023-08-18T16:00:00Z',
              endDateTime: '2023-08-18T16:45:00Z',
              name: '68 Reserve Presale',
            },
            {
              startDateTime: '2023-08-17T19:00:00Z',
              endDateTime: '2024-03-22T04:30:00Z',
              name: 'Resale Onsale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-03-21',
            localTime: '19:30:00',
            dateTime: '2024-03-22T02:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Phoenix',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        info: "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        pleaseNote:
          "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. Standard ticket limit is six (6). Presales and first day of general on sale ticket limit is four (4). To purchase more tickets, please call 602.379.SUNS to find out about group tickets.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 34.0,
            max: 3870.0,
          },
        ],
        products: [
          {
            name: 'PARKWHIZ FOOTPRINT CENTER',
            id: 'G5v0Z9YysP8Dn',
            url: 'https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-03-21-2024/event/19005F0E71950EEA',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/19005F0B52B60E0C/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall four (4) ticket limit for presales and first day of general onsale. Standard ticket limit is six (6).',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5v0Z9Yc3cOzG?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ91718XV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Footprint Center',
              type: 'venue',
              id: 'KovZpZAE617A',
              test: false,
              url: 'https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22218v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '85004',
              timezone: 'America/Phoenix',
              city: {
                name: 'Phoenix',
              },
              state: {
                name: 'Arizona',
                stateCode: 'AZ',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '201 East Jefferson Street',
              },
              location: {
                longitude: '-112.071313',
                latitude: '33.445899',
              },
              markets: [
                {
                  name: 'Phoenix and Tucson',
                  id: '36',
                },
              ],
              dmas: [
                {
                  id: 359,
                },
                {
                  id: 402,
                },
                {
                  id: 420,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867',
                openHoursDetail:
                  'The Footprint Center ticket office will be open at 3pm on weekday events and three (3) hours prior to event time for weekends. For any further questions or ticket inquiries, please reach out to feedback@suns.com or call the Footprint Center ticket office at (602) 379-7800.',
                acceptedPaymentDetail:
                  'The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS',
                willCallDetail:
                  'The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up.',
              },
              parkingDetail:
                'Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472',
              accessibleSeatingDetail:
                'PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.',
              generalInfo: {
                generalRule:
                  'New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than "assisting" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed',
                childRule:
                  'Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games.',
              },
              upcomingEvents: {
                ticketmaster: 70,
                _total: 70,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAE617A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
            {
              name: 'Atlanta Hawks',
              type: 'attraction',
              id: 'K8vZ91718XV',
              test: false,
              url: 'https://www.ticketmaster.com/atlanta-hawks-tickets/artist/805898',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/atlhawks',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/hawks',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Atlanta_Hawks',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/atlhawks',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/hawks/',
                  },
                ],
              },
              aliases: ['alenta hawks', 'atlanta hawks'],
              images: [
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 3,
                ticketmaster: 24,
                _total: 27,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91718XV?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'San Antonio Spurs vs. Phoenix Suns',
        type: 'event',
        id: 'G5dIZ9YmSXKWz',
        test: false,
        url: 'https://www.ticketmaster.com/san-antonio-spurs-vs-phoenix-suns-san-antonio-texas-03-25-2024/event/3A005F0BB3F93F78',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-18T15:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-26T01:30:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-17T19:30:00Z',
              endDateTime: '2023-08-18T03:00:00Z',
              name: 'Resale Onsale',
            },
            {
              startDateTime: '2023-08-17T22:00:00Z',
              endDateTime: '2023-08-18T14:59:00Z',
              name: 'Fan Club Presale',
            },
            {
              startDateTime: '2023-08-18T00:00:00Z',
              endDateTime: '2023-08-18T14:59:00Z',
              name: 'AT&T Center Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-03-25',
            localTime: '19:00:00',
            dateTime: '2024-03-26T00:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        info: 'Ages two and up require a ticket. Doors open one hour before tip. Note that the address on the account must be from the South Central Texas region. Any accounts with an out-of-region address or a P.O. Box address may have their tickets cancelled and refunded without notice.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 27.0,
            max: 3202.0,
          },
        ],
        products: [
          {
            name: 'Frost Bank Center Parking: San Antonio Spurs',
            id: 'G5dIZ9Ymy_V5h',
            url: 'https://www.ticketmaster.com/frost-bank-center-parking-san-antonio-san-antonio-texas-03-25-2024/event/3A005F0BB96742DB',
            type: 'Parking',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/3A005F0BB3F93F78/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info: 'Wheelchair Accessible and Limited Mobility seats are subject to availability. The type of seat is noted when the seat location is selected.  There is a limit of 4 ADA seats per transaction.',
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5dIZ9YmSXKWz?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171ov0?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAJJEdA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Frost Bank Center',
              type: 'venue',
              id: 'KovZpZAJJEdA',
              test: false,
              url: 'https://www.ticketmaster.com/frost-bank-center-tickets-san-antonio/venue/475590',
              locale: 'en-us',
              aliases: ['AT&T Center'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22906v.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              postalCode: '78219',
              timezone: 'America/Chicago',
              city: {
                name: 'San Antonio',
              },
              state: {
                name: 'Texas',
                stateCode: 'TX',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1 Frost Bank Center Drive',
              },
              location: {
                longitude: '-98.4337987',
                latitude: '29.4330386',
              },
              markets: [
                {
                  name: 'San Antonio and Austin',
                  id: '40',
                },
                {
                  name: 'All of US',
                  id: '51',
                },
                {
                  name: 'South Texas',
                  id: '122',
                },
              ],
              dmas: [
                {
                  id: 200,
                },
                {
                  id: 222,
                },
                {
                  id: 260,
                },
                {
                  id: 293,
                },
                {
                  id: 318,
                },
                {
                  id: 379,
                },
                {
                  id: 380,
                },
                {
                  id: 407,
                },
              ],
              social: {
                twitter: {
                  handle: '@frostbankcenter',
                },
              },
              boxOfficeInfo: {
                phoneNumberDetail: '(210) 444-5870',
                openHoursDetail:
                  'Open Event Days Only. Open 3 hours prior to event time. All Frost Bank Center event tickets can also be purchased at www.ticketmaster.com or the Ticketmaster App.',
                acceptedPaymentDetail:
                  'All valid debit and credit cards as well as the digital payment wallets Apple Pay and Google Pay',
                willCallDetail:
                  'The box office is Open Event Days Only starting 3 hours prior to event time. Will call tickets may be picked at the Frost Bank Center Box Office. Policies for will call for each event may vary.',
              },
              parkingDetail:
                'Onsite parking is available in Lots 1, 2,3,4, 5 and 6 and is sold based on availability by event. Parking passes can be purchased online at www.ticketmaster.com or the Ticketmaster App. Limited availability is sold at the Frost Bank Center Box Office. If guests have not pre-purchased parking, some lots may be available to purchase on arrival. Prices range from $15 to $25 based on event. All parking transactions are valid debit and credit cards only.',
              accessibleSeatingDetail:
                'Frost Bank Center is an accessible venue. Accessible seating tickets can be purchased online at www.ticketmaster.com or the Ticketmaster App. A limited number of accessible seating tickets can be purchased at the Frost Bank Center Box Office, Open Event Days Only, opens 3 hours prior to event time. Certified service animals for guests with disabilities are welcome at the Frost Bank Center and must remain on leash or in a harness. If interpretive services are needed, please contact a Fan Experience coordinator at 210-444-5140 a minimum of three weeks prior to the event so appropriate accommodations can be made. Interpreters are provided free of charge, but event tickets are required prior to scheduling.',
              generalInfo: {
                generalRule:
                  'The safety of our fans, partners, staff, players, and coaches in attendance remains Spurs Sports & Entertainments top priority. Guests in attendance will be required to wear masks, maintain physical distancing, undergo temperature checks and complete a health screening through the CLEAR app prior to entering. SS&E has made numerous safety and health changes to policies, procedures, and operations within the Frost Bank Center. For a full list of enhanced updates and protocols, please visit our website www.frostbankcenter.com/arena/ourcommitment. No professional cameras or video equipment may be brought into the arena. All bags are subject to security search, bags up to 6in x 8in in size with a maximum of one compartment are permitted into the arena. For all other bags, fans may utilize two Binbox storage locations conveniently located outside of the East and Courtyard entrances at the Frost Bank Center. Doors open for most Frost Bank Center events one hour prior to event time. Spurs Sports & Entertainment has designated the Frost Bank Center as a tobacco and smoke-free building. The new policy includes all forms of smoking and tobacco use, including but not limited to, cigarettes, cigars, electronic cigarettes, personal vaporizers, smokeless tobacco and tobacco pipes. There will be no designated smoking areas anywhere inside the Frost Bank Center. The tobacco and smoke-free environment extends 500 feet from the Frost Bank Center.',
                childRule:
                  'Yes. For most Frost Bank Center events (some family shows may be excluded) children 2 years and older are required to have a ticket.',
              },
              upcomingEvents: {
                ticketmaster: 80,
                _total: 80,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAJJEdA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'San Antonio Spurs',
              type: 'attraction',
              id: 'K8vZ9171ov0',
              test: false,
              url: 'https://www.ticketmaster.com/san-antonio-spurs-tickets/artist/806012',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/spurs',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/San_Antonio_Spurs',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/Spurs',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/spurs/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/spurs/',
                  },
                ],
              },
              aliases: [
                'san antonio spurs ticket exchange',
                'spurs exchange',
                'spurs ticket exchange',
              ],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 22,
                _total: 27,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171ov0?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Sacramento Kings vs. Phoenix Suns',
        type: 'event',
        id: 'G5vYZ9YBk7oUU',
        test: false,
        url: 'https://www.ticketmaster.com/sacramento-kings-vs-phoenix-suns-sacramento-california-04-12-2024/event/1C005F0E86111DB6',
        locale: 'en-us',
        images: [
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_SOURCE',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-08-18T19:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-04-13T04:00:00Z',
          },
          presales: [
            {
              startDateTime: '2023-08-17T19:15:00Z',
              endDateTime: '2023-08-18T19:00:00Z',
              name: 'Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-04-12',
            localTime: '19:30:00',
            dateTime: '2024-04-13T02:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '695',
          name: 'NBA REGULAR SEASON',
          description: 'NBA REGULAR SEASON / NTL / USA',
        },
        promoters: [
          {
            id: '695',
            name: 'NBA REGULAR SEASON',
            description: 'NBA REGULAR SEASON / NTL / USA',
          },
        ],
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 40.0,
            max: 545.0,
          },
        ],
        products: [
          {
            name: 'PARKWHIZ GOLDEN 1 CENTER',
            id: 'G5vYZ9YWDN-9o',
            url: 'https://www.ticketmaster.com/parkwhiz-golden-1-center-sacramento-california-04-12-2024/event/1C005F0F7B8E15D1',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
          {
            name: 'PARKWHIZ GOLDEN 1 CENTER',
            id: 'G5vYZ9YXNbSgR',
            url: 'https://www.ticketmaster.com/parkwhiz-golden-1-center-sacramento-california-04-12-2024/event/1C005F0FA3633D6F',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/1C005F0E86111DB6/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vYZ9YBk7oUU?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171o50?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAEF76A?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Golden 1 Center',
              type: 'venue',
              id: 'KovZpZAEF76A',
              test: false,
              url: 'https://www.ticketmaster.com/golden-1-center-tickets-sacramento/venue/229976',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/18013v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '95814',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Sacramento',
              },
              state: {
                name: 'California',
                stateCode: 'CA',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '500 David J Stern Walk',
              },
              location: {
                longitude: '-121.500231',
                latitude: '38.580372',
              },
              markets: [
                {
                  name: 'N. California/N. Nevada',
                  id: '41',
                },
              ],
              dmas: [
                {
                  id: 250,
                },
                {
                  id: 273,
                },
                {
                  id: 282,
                },
                {
                  id: 341,
                },
                {
                  id: 368,
                },
                {
                  id: 374,
                },
                {
                  id: 382,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '(916) 701-5401',
                openHoursDetail:
                  'Monday thru Friday 10am to 5pm Saturday & Sunday Closed Saturday and Sunday Event Day Hours 12pm to Event Time',
                acceptedPaymentDetail:
                  'The Box Office is now cashless. ONLY accept Mastercard, Visa, American Express, Discover, Apple Pay and Samsung Pay',
                willCallDetail:
                  'Will Call tickets may be picked-up at the Golden 1 Center box office if a valid government issued photo I.D. that matches the name on the order, the credit card used to make the purchase, and the confirmation number given at the time of purchase are provided. VIP PACKAGES are subject to the package providers rules for pick up. Once the Will Call window closes, unclaimed tickets will be available through the end of the show at the Guest Services Booth at Section 109, please enter at the Media entrance near the box office. For the box office to release tickets not in your name you need to submit a written letter of authorization along with a copy of the driver’s license of the party whose name is on the account. Tickets are not accepted for Will Call from patrons wishing to leave tickets for others.',
              },
              parkingDetail:
                'Parking available in downtown parking lots and surface street parking. Please visit https://reserve.sacpark.org/ for additional information.',
              accessibleSeatingDetail:
                'Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Golden 1 Center Box Office. Interpreters are available by request and are dependent upon availability. Please e-mail ADAservices@kings.com for assistance with any ADA related questions. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Golden 1 Center.',
              generalInfo: {
                generalRule:
                  'No Food or Beverages (including waters) No Video Cameras. Nonprofessional cameras are allowed for some events, but guests should call Golden 1 Center to verify. Golden 1 Center and DOCO are smoke free areas.',
                childRule:
                  'Children two (2) years and older MUST have a ticket. Please check specific shows for age restrictions.',
              },
              upcomingEvents: {
                ticketmaster: 67,
                _total: 67,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAEF76A?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Sacramento Kings',
              type: 'attraction',
              id: 'K8vZ9171o50',
              test: false,
              url: 'https://www.ticketmaster.com/sacramento-kings-tickets/artist/806010',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/SacramentoKings',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Sacramento_Kings',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/sacramentokings/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/sacramentokings/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/kings/',
                  },
                ],
              },
              images: [
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 2,
                ticketmaster: 26,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171o50?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Milwaukee Bucks vs Phoenix Suns (Premium Spaces)',
        type: 'event',
        id: 'vvG1jZ9MdsQVHo',
        test: false,
        url: 'https://offer.fevo.com/bucks-vs-suns-premium-spaces-2465c0d',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: true,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2009-09-12T01:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-17T17:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-03-17',
            localTime: '12:00:00',
            dateTime: '2024-03-17T17:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Chicago',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '494',
          name: 'PROMOTED BY VENUE',
          description: 'PROMOTED BY VENUE / NTL / USA',
        },
        promoters: [
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        accessibility: {},
        ticketLimit: {
          info: 'OFF',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG1jZ9MdsQVHo?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91718TV?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917A_fV?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Fiserv Forum',
              type: 'venue',
              id: 'KovZ917A_fV',
              test: false,
              url: 'https://www.ticketmaster.com/fiserv-forum-tickets-milwaukee/venue/57843',
              locale: 'en-us',
              postalCode: '53203',
              timezone: 'America/Chicago',
              city: {
                name: 'Milwaukee',
              },
              state: {
                name: 'Wisconsin',
                stateCode: 'WI',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1111 Vel R. Phillips Ave',
              },
              location: {
                longitude: '-87.916896',
                latitude: '43.04228',
              },
              markets: [
                {
                  name: 'Milwaukee and Wi',
                  id: '30',
                },
              ],
              dmas: [
                {
                  id: 288,
                },
                {
                  id: 313,
                },
                {
                  id: 328,
                },
                {
                  id: 335,
                },
                {
                  id: 411,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail:
                  'To speak to a customer representative for the Fiserv Forum Ticket Office, call (414) 227-0511. Representatives are available Monday-Friday 9AM to 5:30PM. Alternatively, you can email at ticketing@bucks.com and a Ticket Office representative will get back to you within 1 business day. To book ADA seating for all events at Fiserv Forum, click the ADA icon on the event page on Ticketmaster.com. If you need further assistance with ADA Seating, please call Ticketmaster at 1-800-877-7575 to speak to an Accessible Seating Fan Support Specialist. For General Assistance with Ticketmaster tickets call 1-800-653-8000 to speak with Ticketmaster Customer Service',
                openHoursDetail:
                  'The Ticket Office is open on event days from 12:00pm (or 3 hours prior to event, whichever is earliest) until approximately 1 hour into the event, and on Saturdays from 12:00pm until 4:00pm. The Ticket Office is closed on non-event weekdays. The Ticket Office is located next to the main entrance to the arena, adjacent to the plaza (Vel R Phillips and Juneau). Any questions can be directed to our main line (414 227-0504 from 10AM-4PM.)',
                willCallDetail:
                  'Orders placed through Ticketmaster have standard delivery options available, including mobile delivery, standard and UPS mail. Will Call pickup is available day of event only. Please bring valid, corresponding ID with you for collection. *Please note that Print-at-Home is not be available as a delivery option for this venue.',
              },
              parkingDetail:
                'Advance parking at the 5th Street Parking Garage or Highland Parking Garage can be purchased during your checkout process when buying event tickets online as well as by purchasing from parking events that can be found by searching for 5th Street Parking or Highland Parking Garage on Ticketmaster.com.',
              accessibleSeatingDetail:
                'To book ADA seating for all events at Fiserv Forum, click the ADA icon on the event page on Ticketmaster.com. If you need further assistance, please call Ticketmaster at 1-800-877-7575 to speak to an Accessible Seating Fan Support Specialist or 1-800-653-8000 to speak with Ticketmaster Customer Service.',
              generalInfo: {
                childRule:
                  'For Bucks games and most concerts, children under the age of 2 years old will not require a ticket but will be required to sit on a ticketed guests lap. Family shows often have different restrictions. Call 414-227-0511 for details on specific events.',
              },
              upcomingEvents: {
                ticketmaster: 70,
                _total: 70,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917A_fV?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Milwaukee Bucks',
              type: 'attraction',
              id: 'K8vZ91718TV',
              test: false,
              url: 'https://www.ticketmaster.com/milwaukee-bucks-tickets/artist/805969',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/bucks',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Milwaukee_Bucks',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/milwaukeebucks',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/bucks/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/bucks/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: true,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 3,
                ticketmaster: 36,
                _total: 39,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91718TV?locale=en-us',
                },
              },
            },
            {
              name: 'Phoenix Suns',
              type: 'attraction',
              id: 'K8vZ9171oZf',
              test: false,
              url: 'https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/Suns',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Phoenix_Suns',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/suns/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/suns/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/suns/',
                  },
                ],
              },
              aliases: [
                'phoenix',
                'suns',
                'phoenix suns exchange',
                'phoenix suns team exchange',
                'phoenix suns season ticket holders',
                'phoenix suns season tix holders',
                'phoenix suns ticket exchange',
                'suns exchange',
                'suns season ticket holders',
                'suns season tix holders',
                'suns team exchange',
                'suns ticket exchange',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 5,
                ticketmaster: 23,
                _total: 28,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171oZf?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
        type: 'event',
        id: 'G5vjZ9VY7mIVs',
        test: false,
        url: 'https://www.ticketmaster.com/u2uv-achtung-baby-live-at-sphere-las-vegas-nevada-02-17-2024/event/17005F4C04BA8D31',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-10-25T21:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-02-18T05:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-02-17',
            localTime: '20:00:00',
            dateTime: '2024-02-18T04:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        info: 'This event may include immersive elements such as seat haptics, movement sensations, flashing lights, intense lighting, visual effects, loud noises, and atmospheric simulations. Such elements may aggravate certain medical or physical conditions, and guests should take into consideration these elements, including if they have a history of discomfort or physical symptoms when experiencing them. Visit the Sphere FAQs here and the U2 event page on thespherevegas.com closer to your event date for the latest event information.',
        pleaseNote:
          "The artist wants to give fans, not scalpers, the best chance to buy tickets at face value. If you purchase tickets and can't attend, you'll have the option to resell your tickets to other fans at the original price paid on Ticketmaster's Face Value Exchange. Please note, tickets to these events are mobile only and restricted from transfer. A valid bank account or debit card within the country of this event is required to sell on the Face Value Exchange.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 195.0,
            max: 195.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/17005F4C04BA8D31/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is a ticket limit of four (4) for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: true,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vjZ9VY7mIVs?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Sphere',
              type: 'venue',
              id: 'KovZ917Atbr',
              test: false,
              url: 'https://www.ticketmaster.com/sphere-tickets-las-vegas/venue/189524',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22784v.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              postalCode: '89169',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Las Vegas',
              },
              state: {
                name: 'Nevada',
                stateCode: 'NV',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '255 Sands Avenue',
              },
              location: {
                longitude: '-115.1642896',
                latitude: '36.1207267',
              },
              markets: [
                {
                  name: 'Las Vegas',
                  id: '14',
                },
              ],
              dmas: [
                {
                  id: 319,
                },
              ],
              upcomingEvents: {
                ticketmaster: 1268,
                _total: 1268,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'U2',
              type: 'attraction',
              id: 'K8vZ91712W7',
              test: false,
              url: 'https://www.ticketmaster.com/u2-tickets/artist/736365',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/user/u2official',
                  },
                  {
                    url: 'https://www.youtube.com/u2',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/u2',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id78500',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/U2',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/u2',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ',
                  },
                ],
                instagram: [
                  {
                    url: 'http://instagram.com/u2',
                  },
                  {
                    url: 'https://www.instagram.com/u2/',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.u2.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 21,
                ticketweb: 1,
                _total: 22,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
        type: 'event',
        id: 'G5vjZ9USRXUxo',
        test: false,
        url: 'https://www.ticketmaster.com/u2uv-achtung-baby-live-at-sphere-las-vegas-nevada-03-02-2024/event/17005F6CEFFB6891',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-12-08T20:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-03T05:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-03-02',
            localTime: '20:00:00',
            dateTime: '2024-03-03T04:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        info: 'This event may include immersive elements such as seat haptics, movement sensations, flashing lights, intense lighting, visual effects, loud noises, and atmospheric simulations. Such elements may aggravate certain medical or physical conditions, and guests should take into consideration these elements, including if they have a history of discomfort or physical symptoms when experiencing them. Visit the Sphere FAQs here and the U2 event page on thespherevegas.com closer to your event date for the latest event information.',
        pleaseNote:
          'This event may include immersive elements such as seat haptics, movement sensations, flashing lights, intense lighting, visual effects, loud noises, and atmospheric simulations. Such elements may aggravate certain medical or physical conditions, and guests should take into consideration these elements, including if they have a history of discomfort or physical symptoms when experiencing them. Visit the Sphere FAQs here and the U2 event page on thespherevegas.com closer to your event date for the latest event information.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 195.0,
            max: 195.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/17005F6CEFFB6891/staticImage?type=png&systemId=HOST',
        },
        accessibility: {},
        ticketLimit: {
          info: 'There is a ticket limit of four (4) for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: true,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vjZ9USRXUxo?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Sphere',
              type: 'venue',
              id: 'KovZ917Atbr',
              test: false,
              url: 'https://www.ticketmaster.com/sphere-tickets-las-vegas/venue/189524',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22784v.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              postalCode: '89169',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Las Vegas',
              },
              state: {
                name: 'Nevada',
                stateCode: 'NV',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '255 Sands Avenue',
              },
              location: {
                longitude: '-115.1642896',
                latitude: '36.1207267',
              },
              markets: [
                {
                  name: 'Las Vegas',
                  id: '14',
                },
              ],
              dmas: [
                {
                  id: 319,
                },
              ],
              upcomingEvents: {
                ticketmaster: 1268,
                _total: 1268,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'U2',
              type: 'attraction',
              id: 'K8vZ91712W7',
              test: false,
              url: 'https://www.ticketmaster.com/u2-tickets/artist/736365',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/user/u2official',
                  },
                  {
                    url: 'https://www.youtube.com/u2',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/u2',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id78500',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/U2',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/u2',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ',
                  },
                ],
                instagram: [
                  {
                    url: 'http://instagram.com/u2',
                  },
                  {
                    url: 'https://www.instagram.com/u2/',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.u2.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 21,
                ticketweb: 1,
                _total: 22,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
        type: 'event',
        id: 'G5vjZ9VY7sbVg',
        test: false,
        url: 'https://www.ticketmaster.com/u2uv-achtung-baby-live-at-sphere-las-vegas-nevada-02-18-2024/event/17005F4C04C58D35',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-10-25T21:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-02-19T05:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-02-18',
            localTime: '20:00:00',
            dateTime: '2024-02-19T04:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        info: 'This event may include immersive elements such as seat haptics, movement sensations, flashing lights, intense lighting, visual effects, loud noises, and atmospheric simulations. Such elements may aggravate certain medical or physical conditions, and guests should take into consideration these elements, including if they have a history of discomfort or physical symptoms when experiencing them. Visit the Sphere FAQs here and the U2 event page on thespherevegas.com closer to your event date for the latest event information.',
        pleaseNote:
          "The artist wants to give fans, not scalpers, the best chance to buy tickets at face value. If you purchase tickets and can't attend, you'll have the option to resell your tickets to other fans at the original price paid on Ticketmaster's Face Value Exchange. Please note, tickets to these events are mobile only and restricted from transfer. A valid bank account or debit card within the country of this event is required to sell on the Face Value Exchange.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 195.0,
            max: 195.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/17005F4C04C58D35/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is a ticket limit of four (4) for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: true,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vjZ9VY7sbVg?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Sphere',
              type: 'venue',
              id: 'KovZ917Atbr',
              test: false,
              url: 'https://www.ticketmaster.com/sphere-tickets-las-vegas/venue/189524',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22784v.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              postalCode: '89169',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Las Vegas',
              },
              state: {
                name: 'Nevada',
                stateCode: 'NV',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '255 Sands Avenue',
              },
              location: {
                longitude: '-115.1642896',
                latitude: '36.1207267',
              },
              markets: [
                {
                  name: 'Las Vegas',
                  id: '14',
                },
              ],
              dmas: [
                {
                  id: 319,
                },
              ],
              upcomingEvents: {
                ticketmaster: 1268,
                _total: 1268,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'U2',
              type: 'attraction',
              id: 'K8vZ91712W7',
              test: false,
              url: 'https://www.ticketmaster.com/u2-tickets/artist/736365',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/user/u2official',
                  },
                  {
                    url: 'https://www.youtube.com/u2',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/u2',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id78500',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/U2',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/u2',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ',
                  },
                ],
                instagram: [
                  {
                    url: 'http://instagram.com/u2',
                  },
                  {
                    url: 'https://www.instagram.com/u2/',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.u2.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 21,
                ticketweb: 1,
                _total: 22,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'LA Clippers vs. Los Angeles Lakers',
        type: 'event',
        id: 'Z7r9jZ1AdJ9G7',
        test: false,
        url: 'https://www.ticketmaster.com/event/Z7r9jZ1AdJ9G7',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: true,
          },
        ],
        sales: {
          public: {
            startDateTime: '1900-01-01T18:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-02-29T03:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-02-28',
            localTime: '19:00:00',
            dateTime: '2024-02-29T03:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAde',
              name: 'Basketball',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFJA',
              name: 'NBA',
            },
            family: false,
          },
        ],
        outlets: [
          {
            url: 'https://www.ticketmaster.com/la-clippers-vs-los-angeles-lakers-los-angeles-california-02-28-2024/event/Zu0FM1R0e5tf1oF',
            type: 'tmMarketPlace',
          },
        ],
        seatmap: {
          staticUrl:
            'https://content.resale.ticketmaster.com/maps/1604-480-3-main2.gif',
        },
        ticketing: {
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/Z7r9jZ1AdJ9G7?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171o1V?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ91718T0?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/ZFr9jZe6vA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Crypto.com Arena',
              type: 'venue',
              id: 'ZFr9jZe6vA',
              test: false,
              locale: 'en-us',
              postalCode: '90017',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Los Angeles',
              },
              state: {
                name: 'California',
                stateCode: 'CA',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1111 S. Figueroa St.',
              },
              location: {
                longitude: '-118.2649',
                latitude: '34.053101',
              },
              dmas: [
                {
                  id: 324,
                },
              ],
              upcomingEvents: {
                tmr: 67,
                ticketmaster: 22,
                _total: 89,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/ZFr9jZe6vA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'LA Clippers',
              type: 'attraction',
              id: 'K8vZ9171o1V',
              test: false,
              url: 'https://www.ticketmaster.com/la-clippers-tickets/artist/805958',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/LAClippers',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Los_Angeles_Clippers',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/LAClippers/',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/laclippers/',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/clippers/',
                  },
                ],
              },
              aliases: ['la clippers', 'los angeles clippers'],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: true,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 18,
                ticketmaster: 12,
                _total: 30,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171o1V?locale=en-us',
                },
              },
            },
            {
              name: 'Los Angeles Lakers',
              type: 'attraction',
              id: 'K8vZ91718T0',
              test: false,
              url: 'https://www.ticketmaster.com/los-angeles-lakers-tickets/artist/805962',
              locale: 'en-us',
              externalLinks: {
                twitter: [
                  {
                    url: 'https://twitter.com/lakers',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Los_Angeles_Lakers',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/lakers',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/lakers',
                  },
                ],
                homepage: [
                  {
                    url: 'https://www.nba.com/lakers/',
                  },
                ],
              },
              aliases: [
                'los angeles lakers',
                'la lakers',
                'laker',
                'laker tickets',
                'lakers tickets',
              ],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                  attribution:
                    'Prior image was just below specs, somehow is not being read, this image is to full spec.',
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAde',
                    name: 'Basketball',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFJA',
                    name: 'NBA',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                tmr: 2,
                ticketmaster: 25,
                _total: 27,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91718T0?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
        type: 'event',
        id: 'G5vjZ9VY7lIVc',
        test: false,
        url: 'https://www.ticketmaster.com/u2uv-achtung-baby-live-at-sphere-las-vegas-nevada-02-15-2024/event/17005F4C04AE8D2D',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-10-25T21:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-02-16T05:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-02-15',
            localTime: '20:00:00',
            dateTime: '2024-02-16T04:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        info: 'This event may include immersive elements such as seat haptics, movement sensations, flashing lights, intense lighting, visual effects, loud noises, and atmospheric simulations. Such elements may aggravate certain medical or physical conditions, and guests should take into consideration these elements, including if they have a history of discomfort or physical symptoms when experiencing them. Visit the Sphere FAQs here and the U2 event page on thespherevegas.com closer to your event date for the latest event information.',
        pleaseNote:
          "The artist wants to give fans, not scalpers, the best chance to buy tickets at face value. If you purchase tickets and can't attend, you'll have the option to resell your tickets to other fans at the original price paid on Ticketmaster's Face Value Exchange. Please note, tickets to these events are mobile only and restricted from transfer. A valid bank account or debit card within the country of this event is required to sell on the Face Value Exchange.",
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 195.0,
            max: 195.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/17005F4C04AE8D2D/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is a ticket limit of four (4) for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: true,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vjZ9VY7lIVc?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Sphere',
              type: 'venue',
              id: 'KovZ917Atbr',
              test: false,
              url: 'https://www.ticketmaster.com/sphere-tickets-las-vegas/venue/189524',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22784v.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              postalCode: '89169',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Las Vegas',
              },
              state: {
                name: 'Nevada',
                stateCode: 'NV',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '255 Sands Avenue',
              },
              location: {
                longitude: '-115.1642896',
                latitude: '36.1207267',
              },
              markets: [
                {
                  name: 'Las Vegas',
                  id: '14',
                },
              ],
              dmas: [
                {
                  id: 319,
                },
              ],
              upcomingEvents: {
                ticketmaster: 1268,
                _total: 1268,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'U2',
              type: 'attraction',
              id: 'K8vZ91712W7',
              test: false,
              url: 'https://www.ticketmaster.com/u2-tickets/artist/736365',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/user/u2official',
                  },
                  {
                    url: 'https://www.youtube.com/u2',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/u2',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id78500',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/U2',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/u2',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ',
                  },
                ],
                instagram: [
                  {
                    url: 'http://instagram.com/u2',
                  },
                  {
                    url: 'https://www.instagram.com/u2/',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.u2.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 21,
                ticketweb: 1,
                _total: 22,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'P!NK: Summer Carnival 2024',
        type: 'event',
        id: 'vvG17Z9MBX0JyU',
        test: false,
        url: 'https://www.ticketmaster.com/pnk-summer-carnival-2024-foxborough-massachusetts-08-21-2024/event/01005F7EBE926E76',
        locale: 'en-us',
        images: [
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-12-11T15:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-08-22T00:30:00Z',
          },
          presales: [
            {
              startDateTime: '2023-12-11T15:00:00Z',
              endDateTime: '2024-08-21T22:30:00Z',
              name: 'Citi® Cardmember Preferred Tickets',
            },
            {
              startDateTime: '2023-12-07T15:00:00Z',
              endDateTime: '2023-12-11T03:00:00Z',
              name: 'Citi® Cardmember Presale',
            },
            {
              startDateTime: '2023-12-07T15:00:00Z',
              endDateTime: '2023-12-11T03:00:00Z',
              name: 'VIP Package Presale',
            },
            {
              startDateTime: '2023-12-07T15:00:00Z',
              endDateTime: '2023-12-11T03:00:00Z',
              name: 'Verizon Up Presale Tickets',
            },
            {
              startDateTime: '2023-12-09T15:00:00Z',
              endDateTime: '2023-12-11T03:00:00Z',
              name: 'Sheryl Crow Artist Presale',
            },
            {
              startDateTime: '2023-12-09T14:45:00Z',
              endDateTime: '2023-12-11T03:00:00Z',
              name: 'Live Nation/Ticketmaster/Venue/Radio',
            },
            {
              startDateTime: '2023-12-11T15:00:00Z',
              endDateTime: '2024-08-15T02:00:00Z',
              name: 'P!NK VIP Packages Onsale',
            },
            {
              startDateTime: '2023-12-11T15:00:00Z',
              endDateTime: '2024-07-25T02:00:00Z',
              name: 'Verizon Up Select Seats',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2024-08-21',
            localTime: '18:30:00',
            dateTime: '2024-08-21T22:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/New_York',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 59.11,
            max: 340.0,
          },
        ],
        products: [
          {
            name: 'PARKWHIZ GILLETTE STADIUM',
            id: 'vvG17Z9MzKCQqu',
            url: 'https://www.ticketmaster.com/parkwhiz-gillette-stadium-foxborough-massachusetts-08-21-2024/event/01005F7E1339A74D',
            type: 'Upsell',
            classifications: [
              {
                primary: true,
                segment: {
                  id: 'KZFzniwnSyZfZ7v7n1',
                  name: 'Miscellaneous',
                },
                genre: {
                  id: 'KnvZfZ7v7ll',
                  name: 'Undefined',
                },
                subGenre: {
                  id: 'KZazBEonSMnZfZ7vAv1',
                  name: 'Undefined',
                },
                type: {
                  id: 'KZAyXgnZfZ7vAva',
                  name: 'Parking',
                },
                subType: {
                  id: 'KZFzBErXgnZfZ7vAFe',
                  name: 'Regular',
                },
                family: false,
              },
            ],
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/01005F7EBE926E76/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is a 8 Ticket Limit on this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/vvG17Z9MBX0JyU?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ91713kV?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ917GGs0?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZA6kvlA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Gillette Stadium',
              type: 'venue',
              id: 'KovZpZA6kvlA',
              test: false,
              url: 'https://www.ticketmaster.com/gillette-stadium-tickets-foxborough/venue/8759',
              locale: 'en-us',
              aliases: [
                'gilette',
                'gillette',
                'gilette stadium',
                'gillete stadium',
              ],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/14863v.gif',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: '02035',
              timezone: 'America/New_York',
              city: {
                name: 'Foxborough',
              },
              state: {
                name: 'Massachusetts',
                stateCode: 'MA',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '1 Patriot Place',
              },
              location: {
                longitude: '-71.264321',
                latitude: '42.090918',
              },
              markets: [
                {
                  name: 'Boston',
                  id: '11',
                },
                {
                  name: 'New England',
                  id: '33',
                },
                {
                  name: 'Connecticut',
                  id: '124',
                },
              ],
              dmas: [
                {
                  id: 225,
                },
                {
                  id: 235,
                },
                {
                  id: 238,
                },
                {
                  id: 296,
                },
                {
                  id: 361,
                },
                {
                  id: 363,
                },
                {
                  id: 364,
                },
                {
                  id: 392,
                },
              ],
              social: {
                twitter: {
                  handle: '@gillettestadium',
                },
              },
              boxOfficeInfo: {
                openHoursDetail:
                  'The Gillette Stadium Ticket Office is located in the Enel Plaza, outside of the Ticketmaster gate at the north end of the stadium. The Gillette Stadium Ticket Office is open on event days only and will open with parking lots.',
                acceptedPaymentDetail:
                  'Visa only for New England Patriots. Visa, Mastercard, Amex, Cash-For all other events',
                willCallDetail:
                  'Will call is located at the ticket office. Customers must present photo I.D., the actual credit card used to purchase tickets and the confirmation number. NOTE: If picking up your tickets at Will Call, we strongly recommend arriving at the Ticket Office with a photo I.D. one hour prior to kickoff to claim your seats and avoid any prolonged wait times.',
              },
              parkingDetail:
                'Opening and price varies per event. Please check www.gillettestadium.com for more information.',
              accessibleSeatingDetail:
                'Accessible Seating available through Ticketmaster and the box office.',
              generalInfo: {
                generalRule:
                  'No umbrellas, coolers, cans, bottles or alcohol allowed in stadium. Tailgating, picnicing, BBQ\'s allowed in specific areas of parking lots. No open fires. Gillette has a new Clear Bag Policy! Bags of any kind will not be permitted except for gallon size clear freezer or authorized clear bags measuring 12"x 12" x 6" and women\'s clutches not to exceed 7" x 4" x 2" (approximately the size of a hand). For more information visit: WWW.GILLETTESTADIUM.COM/BAGPOLICY',
              },
              upcomingEvents: {
                ticketmaster: 30,
                _total: 30,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZA6kvlA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'P!NK',
              type: 'attraction',
              id: 'K8vZ9171Jo7',
              test: false,
              url: 'https://www.ticketmaster.com/pnk-tickets/artist/718655',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/user/PinkVideoVault',
                  },
                  {
                    url: 'https://www.youtube.com/user/PinkVEVO',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/Pink',
                  },
                ],
                itunes: [
                  {
                    url: 'https://music.apple.com/us/artist/p-nk/4488522',
                  },
                ],
                lastfm: [
                  {
                    url: 'http://www.last.fm/music/P!nk',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Pink_(singer)',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/pink',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'f4d5cc07-3bc9-4836-9b15-88a08359bc63',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/pink/',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.pinkspage.com/',
                  },
                ],
              },
              aliases: ['p!nk', 'pink'],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7la',
                    name: 'Individual',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vAd7',
                    name: 'Musician',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                'mfx-dk': 2,
                'mfx-se': 1,
                'mfx-be': 1,
                'mfx-nl': 4,
                tmr: 1,
                ticketmaster: 58,
                _total: 67,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us',
                },
              },
            },
            {
              name: 'Sheryl Crow',
              type: 'attraction',
              id: 'K8vZ91713kV',
              test: false,
              url: 'https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/SherylCrow',
                  },
                ],
                itunes: [
                  {
                    url: 'https://music.apple.com/us/artist/sheryl-crow/58757',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/sherylcrow',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/Sheryl_Crow',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD',
                  },
                ],
                instagram: [
                  {
                    url: 'https://www.instagram.com/SherylCrow',
                  },
                ],
                musicbrainz: [
                  {
                    id: '80ccfede-c258-4575-a7ad-c982e9932e0f',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.sherylcrow.com/',
                  },
                ],
              },
              aliases: [
                'cheryl crow',
                'sheryl crow',
                'cheryl crowe',
                'sheryl crowe',
              ],
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE',
                  width: 2426,
                  height: 1617,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6dt',
                    name: 'Alternative Rock',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketnet: 1,
                'mfx-es': 2,
                tmr: 1,
                ticketmaster: 23,
                _total: 27,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91713kV?locale=en-us',
                },
              },
            },
            {
              name: 'The Script',
              type: 'attraction',
              id: 'K8vZ917GGs0',
              test: false,
              url: 'https://www.ticketmaster.com/the-script-tickets/artist/1290672',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/user/TheScriptVEVO',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/thescript',
                  },
                ],
                itunes: [
                  {
                    url: 'https://music.apple.com/us/artist/the-script/277228393',
                  },
                ],
                lastfm: [
                  {
                    url: 'http://www.last.fm/music/The+Script',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/thescript',
                  },
                ],
                wiki: [
                  {
                    url: 'https://en.wikipedia.org/wiki/The_Script',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V',
                  },
                ],
                instagram: [
                  {
                    url: 'https://instagram.com/thescriptofficial',
                  },
                  {
                    url: 'https://instagram.com/thescriptofficial/',
                  },
                ],
                musicbrainz: [
                  {
                    id: '4c98aa1b-34eb-4336-987f-5e50aa059c00',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.thescriptmusic.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE',
                  width: 2426,
                  height: 1356,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                'mfx-dk': 1,
                'mfx-be': 1,
                tmr: 1,
                ticketmaster: 22,
                _total: 25,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917GGs0?locale=en-us',
                },
              },
            },
            {
              name: 'KidCutUp',
              type: 'attraction',
              id: 'K8vZ9178Lb7',
              test: false,
              url: 'https://www.ticketmaster.com/kidcutup-tickets/artist/1797766',
              locale: 'en-us',
              externalLinks: {
                facebook: [
                  {
                    url: 'https://www.facebook.com/kidcutup',
                  },
                ],
                musicbrainz: [
                  {
                    id: '66e92720-60a4-4f73-b263-2e31213b25f8',
                  },
                ],
                homepage: [
                  {
                    url: 'http://kidcutup.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE',
                  width: 2426,
                  height: 2081,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAvF',
                    name: 'Dance/Electronic',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vA1E',
                    name: 'Dance/Electronic',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7la',
                    name: 'Individual',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vAd7',
                    name: 'Musician',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                'mfx-be': 1,
                ticketmaster: 30,
                _total: 31,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
        type: 'event',
        id: 'G5vjZ9USRHJ-g',
        test: false,
        url: 'https://www.ticketmaster.com/u2uv-achtung-baby-live-at-sphere-las-vegas-nevada-03-01-2024/event/17005F6CEFF26875',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
            width: 2426,
            height: 1365,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
            attribution: 'Tom Hefter CDD Approval attached in Jira ticket.',
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-12-08T20:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-03-02T05:00:00Z',
          },
        },
        dates: {
          start: {
            localDate: '2024-03-01',
            localTime: '20:00:00',
            dateTime: '2024-03-02T04:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Los_Angeles',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        promoter: {
          id: '653',
          name: 'LIVE NATION MUSIC',
          description: 'LIVE NATION MUSIC / NTL / USA',
        },
        promoters: [
          {
            id: '653',
            name: 'LIVE NATION MUSIC',
            description: 'LIVE NATION MUSIC / NTL / USA',
          },
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        info: 'This event may include immersive elements such as seat haptics, movement sensations, flashing lights, intense lighting, visual effects, loud noises, and atmospheric simulations. Such elements may aggravate certain medical or physical conditions, and guests should take into consideration these elements, including if they have a history of discomfort or physical symptoms when experiencing them. Visit the Sphere FAQs here and the U2 event page on thespherevegas.com closer to your event date for the latest event information.',
        pleaseNote:
          'This event may include immersive elements such as seat haptics, movement sensations, flashing lights, intense lighting, visual effects, loud noises, and atmospheric simulations. Such elements may aggravate certain medical or physical conditions, and guests should take into consideration these elements, including if they have a history of discomfort or physical symptoms when experiencing them. Visit the Sphere FAQs here and the U2 event page on thespherevegas.com closer to your event date for the latest event information.',
        priceRanges: [
          {
            type: 'standard',
            currency: 'USD',
            min: 195.0,
            max: 195.0,
          },
        ],
        seatmap: {
          staticUrl:
            'https://maps.ticketmaster.com/maps/geometry/3/event/17005F6CEFF26875/staticImage?type=png&systemId=HOST',
        },
        accessibility: {},
        ticketLimit: {
          info: 'There is a ticket limit of four (4) for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: true,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vjZ9USRHJ-g?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'Sphere',
              type: 'venue',
              id: 'KovZ917Atbr',
              test: false,
              url: 'https://www.ticketmaster.com/sphere-tickets-las-vegas/venue/189524',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/22784v.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
              ],
              postalCode: '89169',
              timezone: 'America/Los_Angeles',
              city: {
                name: 'Las Vegas',
              },
              state: {
                name: 'Nevada',
                stateCode: 'NV',
              },
              country: {
                name: 'United States Of America',
                countryCode: 'US',
              },
              address: {
                line1: '255 Sands Avenue',
              },
              location: {
                longitude: '-115.1642896',
                latitude: '36.1207267',
              },
              markets: [
                {
                  name: 'Las Vegas',
                  id: '14',
                },
              ],
              dmas: [
                {
                  id: 319,
                },
              ],
              upcomingEvents: {
                ticketmaster: 1268,
                _total: 1268,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZ917Atbr?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'U2',
              type: 'attraction',
              id: 'K8vZ91712W7',
              test: false,
              url: 'https://www.ticketmaster.com/u2-tickets/artist/736365',
              locale: 'en-us',
              externalLinks: {
                youtube: [
                  {
                    url: 'https://www.youtube.com/user/u2official',
                  },
                  {
                    url: 'https://www.youtube.com/u2',
                  },
                ],
                twitter: [
                  {
                    url: 'https://twitter.com/u2',
                  },
                ],
                itunes: [
                  {
                    url: 'https://itunes.apple.com/artist/id78500',
                  },
                ],
                lastfm: [
                  {
                    url: 'https://www.last.fm/music/U2',
                  },
                ],
                facebook: [
                  {
                    url: 'https://www.facebook.com/u2',
                  },
                ],
                spotify: [
                  {
                    url: 'https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ',
                  },
                ],
                instagram: [
                  {
                    url: 'http://instagram.com/u2',
                  },
                  {
                    url: 'https://www.instagram.com/u2/',
                  },
                ],
                musicbrainz: [
                  {
                    id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
                  },
                ],
                homepage: [
                  {
                    url: 'http://www.u2.com/',
                  },
                ],
              },
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                  attribution:
                    'Tom Hefter CDD Approval attached in Jira ticket.',
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nJ',
                    name: 'Music',
                  },
                  genre: {
                    id: 'KnvZfZ7vAeA',
                    name: 'Rock',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7v6F1',
                    name: 'Pop',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7nI',
                    name: 'Undefined',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7v7lJ',
                    name: 'Undefined',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 21,
                ticketweb: 1,
                _total: 22,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91712W7?locale=en-us',
                },
              },
            },
          ],
        },
      },
    ],
  },
  _links: {
    first: {
      href: '/discovery/v2/events?startDateTime=2024-02-15T16%3A18%3A58Z&page=0&size=20',
    },
    self: {
      href: '/discovery/v2/events?startDateTime=2024-02-15T16%3A18%3A58Z',
    },
    next: {
      href: '/discovery/v2/events?startDateTime=2024-02-15T16%3A18%3A58Z&page=1&size=20',
    },
    last: {
      href: '/discovery/v2/events?startDateTime=2024-02-15T16%3A18%3A58Z&page=12584&size=20',
    },
  },
  page: {
    size: 20,
    totalElements: 251685,
    totalPages: 12585,
    number: 0,
  },
};

export const mockMapped = [
  {
    name: 'Minnesota Timberwolves vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RECOMENDATION_16_9.jpg',
    date: '2024-04-14T19:30:00Z',
    locationName: 'Target Center',
  },
  {
    name: 'Charlotte Hornets vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/236/d381735d-e40d-44c2-9055-91cc0038e236_1340151_RECOMENDATION_16_9.jpg',
    date: '2024-03-15T23:00:00Z',
    locationName: 'Spectrum Center ',
  },
  {
    name: 'Milwaukee Bucks vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_LANDSCAPE_16_9.jpg',
    date: '2024-03-17T17:00:00Z',
    locationName: 'Fiserv Forum',
  },
  {
    name: 'Oklahoma City Thunder vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg',
    date: '2024-03-30T00:00:00Z',
    locationName: 'Paycom Center',
  },
  {
    name: 'Phoenix Suns vs. Oklahoma City Thunder',
    image:
      'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
    date: '2024-03-04T02:30:00Z',
    locationName: 'Footprint Center',
  },
  {
    name: 'New Orleans Pelicans vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg',
    date: '2024-04-02T00:00:00Z',
    locationName: 'Smoothie King Center',
  },
  {
    name: 'San Antonio Spurs vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg',
    date: '2024-03-24T00:00:00Z',
    locationName: 'Frost Bank Center',
  },
  {
    name: 'Phoenix Suns vs. New Orleans Pelicans',
    image:
      'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
    date: '2024-04-07T22:00:00Z',
    locationName: 'Footprint Center',
  },
  {
    name: 'Phoenix Suns vs. Minnesota Timberwolves',
    image:
      'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
    date: '2024-04-06T02:00:00Z',
    locationName: 'Footprint Center',
  },
  {
    name: 'Phoenix Suns vs. Atlanta Hawks',
    image:
      'https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg',
    date: '2024-03-22T02:30:00Z',
    locationName: 'Footprint Center',
  },
  {
    name: 'San Antonio Spurs vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg',
    date: '2024-03-26T00:00:00Z',
    locationName: 'Frost Bank Center',
  },
  {
    name: 'Sacramento Kings vs. Phoenix Suns',
    image:
      'https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg',
    date: '2024-04-13T02:30:00Z',
    locationName: 'Golden 1 Center',
  },
  {
    name: 'Milwaukee Bucks vs Phoenix Suns (Premium Spaces)',
    image:
      'https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_LANDSCAPE_16_9.jpg',
    date: '2024-03-17T17:00:00Z',
    locationName: 'Fiserv Forum',
  },
  {
    name: 'LA Clippers vs. Los Angeles Lakers',
    image:
      'https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_16_9.jpg',
    date: '2024-02-29T03:00:00Z',
    locationName: 'Crypto.com Arena',
  },
  {
    name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
    image:
      'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
    date: '2024-02-18T04:00:00Z',
    locationName: 'Sphere',
  },
  {
    name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
    image:
      'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
    date: '2024-03-03T04:00:00Z',
    locationName: 'Sphere',
  },
  {
    name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
    image:
      'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
    date: '2024-02-19T04:00:00Z',
    locationName: 'Sphere',
  },
  {
    name: 'Los Angeles Dodgers vs. Los Angeles Angels',
    image:
      'https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RECOMENDATION_16_9.jpg',
    date: '2024-03-24T23:10:00Z',
    locationName: 'Dodger Stadium',
  },
  {
    name: 'P!NK: Summer Carnival 2024',
    image:
      'https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg',
    date: '2024-08-21T22:30:00Z',
    locationName: 'Gillette Stadium',
  },
  {
    name: 'U2:UV Achtung Baby Live At Sphere - General Admission Floor',
    image:
      'https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg',
    date: '2024-03-02T04:00:00Z',
    locationName: 'Sphere',
  },
];
