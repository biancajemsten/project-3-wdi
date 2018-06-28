const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Bundle = require('../models/bundle');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    firstName: 'Arabella',
    lastName: 'Dear',
    email: 'ad@test.com',
    image: 'https://media.licdn.com/dms/image/C5103AQGzHzd2aQENcw/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=RsmA095b5Houz0gHrLFabJEadDCc0mIQ_WdWwDh4p_I',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Scotland',
    musicGenres: ['Jazz']
  },
  {
    firstName: 'Bianca',
    lastName: 'Jemsten',
    email: 'bj@test.com',
    image: 'https://media.licdn.com/dms/image/C5603AQGP8ydXXjyNfw/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=LWRubHnaKF4b7smqh27er3vnUFtcf6UxgwiF7A8sS2A',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Sweden',
    musicGenres: ['Swedish Pop', 'Rock']
  },
  {
    firstName: 'James',
    lastName: 'Newell',
    email: 'jn@test.com',
    image: 'https://media.licdn.com/dms/image/C4D03AQHazaIQs2xaYQ/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=D57hH_MeggXFnIW7n98oGzfrPcnRfUyKbdFCviN6F9o',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'London',
    musicGenres: ['Metal']
  },
  {
    firstName: 'Martin',
    lastName: 'Allgood',
    email: 'ma@test.com',
    image: 'https://media.licdn.com/dms/image/C5603AQGu6wh3qYGBLw/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=XnUnHb-LzDPn31_F5TCnZj94SrBbkZT7dhtjiCR6CZU',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Brockley',
    musicGenres: ['Metal']
  },
  {
    firstName: 'Richard',
    lastName: 'Tzanov',
    email: 'rz@test.com',
    image: 'https://media.licdn.com/dms/image/C4D03AQFZnKbxNw_zng/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=uGDSgL9GnAd1cDY5xwtJodfe2NV_V3omkLmcpkQH8vY',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Bulgaria',
    musicGenres: ['Folk music', 'Rock']
  },
  {
    firstName: 'Gerry',
    lastName: 'Mathe',
    email: 'gm@test.com',
    image: 'https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/1554/thumb_Gerry_2_240x240.jpg',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Paris',
    musicGenres: ['Techno', 'Rock']
  },
  {
    firstName: 'Martin',
    lastName: 'Koeoep',
    email: 'mk@test.com',
    image: 'https://media.licdn.com/dms/image/C5603AQEDWu9Hi21RnA/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=6nij7FQV1VxDaR3CmRcA8V6FwXSXml9dHIY34nN2QgQ',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Estonia',
    musicGenres: ['Jazz', 'Rock']
  }])
    .then(users => {
      console.log(`${users.length} User(s) created`);
      return Bundle.create([{
        event: {
          name: 'Diamonds Are Forever',
          date: '2018-06-20',
          venue: 'Night People MCR',
          address: '105-107 Princess Street, Manchester, M1 6DD',
          ticketPrice: '£2.00',
          description: 'Manchester/’s Glam Rock extravaganza returns with a special night dedicated to the greatest rock band of all time, The Rolling Stones!',
          startTime: '11pm',
          eventType: 'Concert',
          location: {
            lat: 53.4767,
            lng: -2.2390
          }
        },
        bar: {
          name: 'Grey Horse Inn',
          address: '80 Portland St, Manchester M1 4QX',
          website: '',
          openingHours: {
            monday: '11am - 12am',
            tuesday: '11am - 12am',
            wednesday: '11am - 12am',
            thursday: '11am - 12am',
            friday: '11am - 1am',
            saturday: '11am - 1am',
            sunday: '12pm - 12am'
          },
          location: {
            lat: 53.477967,
            lng: -2.239833
          }
        },
        restaurant: {
          name: 'Happy Seasons',
          address: '59 Faulkner St, Manchester M1 4FF',
          website: 'https://happyseasons.in/',
          openingHours: {
            monday: '12-10:30pm',
            tuesday: '12-10:30pm',
            wednesday: '12-10:30pm',
            thursday: '12-10:30pm',
            friday: '12-11pm',
            saturday: '12-11pm',
            sunday: '12-9pm'
          },
          location: {
            lat: 53.478226,
            lng: -2.240074
          }
        },
        creator: users[0],
        attendees: [{
          userId: '5b325bc4cbc256270346f579',
          firstName: 'Bianca',
          lastName: 'Jemsten'
        }]

      }, {
        event: {
          name: 'Gentlemen\'s Dub Club',
          date: '2018-06-29',
          venue: 'Brighton Racecourse',
          address: 'Brighton Racecourse, Freshfield Rd, Brighton BN2 9XZ',
          ticketPrice: '£39.50',
          description: 'After a triumphant return in 2017 Gentlemen\'s Dub Club are set to headline here at Brighton Racecourse in the summer of 2018.',
          startTime: '4:00pm',
          eventType: 'Concert',
          location: {
            lat: 50.829384,
            lng: -0.112589
          }
        },
        bar: {
          name: 'Fox on the Downs',
          address: '291 Elm Grove, Brighton BN2 3EA',
          website: '',
          openingHours: {
            monday: '11am - 11pm',
            tuesday: '11am - 11pm',
            wednesday: '11am - 11pm',
            thursday: '11am - 11pm',
            friday: '11am - 11pm',
            saturday: '11am - 11pm',
            sunday: '11am - 11pm'
          },
          location: {
            lat: 50.832101,
            lng: -0.112525
          }
        },
        restaurant: {
          name: 'Garden Kitchen',
          address: 'Warren Rd, Brighton BN2 6BA',
          website: 'http://www.wyevalegardencentres.co.uk',
          openingHours: {
            monday: '9am - 5pm',
            tuesday: '9am - 5pm',
            wednesday: '9am - 5pm',
            thursday: '9am - 5pm',
            friday: '9am - 5pm',
            saturday: '9am - 5pm',
            sunday: '10am - 4pm'
          },
          location: {
            lat: 50.830983,
            lng: -0.111345
          }
        },
        creator: users[1],
        attendees: [{
          userId: '5b338d5ecf10883d66c0a832',
          firstName: 'James',
          lastName: 'Newell'
        }]
      }, {
        event: {
          name: 'Lower Than Atlantis',
          date: '2018-03-24',
          venue: 'The Plug',
          address: '14-16 Matilda Street, Sheffield, Sheffield, S1 4QD',
          ticketPrice: '£21',
          description: 'Lower Than Atlantis are an English rock band, formed in 2007 and based in Watford',
          startTime: '8pm',
          eventType: 'Concert',
          location: {
            lat: 53.376746,
            lng: -1.471292
          }
        },
        bar: {
          name: 'Rutland Arms',
          address: '86 Brown St, Sheffield S1 2BS',
          website: 'http://www.therutlandarmssheffield.co.uk/',
          openingHours: {
            monday: '12pm - 11pm',
            tuesday: '12pm - 11pm',
            wednesday: '12pm - 11pm',
            thursday: '12pm - 11pm',
            friday: '12pm - 12am',
            saturday: '12pm - 12am',
            sunday: '12pm - 11pm'
          },
          location: {
            lat: 53.376576,
            lng: -1.467344
          }
        },
        restaurant: {
          name: 'Fresh Choice noodlebar',
          address: '21-23 Matilda St, Sheffield S1 4QB',
          website: '',
          openingHours: {
            monday: '11:30am-11pm',
            tuesday: '11:30am-11pm',
            wednesday: '11:30am-11pm',
            thursday: '11:30am-11pm',
            friday: '11:30am-11pm',
            saturday: '11:30am-11pm',
            sunday: '11:30am-10pm'
          },
          location: {
            lat: 53.376658,
            lng: -1.471142
          }
        },
        creator: users[2],
        attendees: [{
          userId: '5b325bc4cbc256270346f579',
          firstName: 'Bianca',
          lastName: 'Jemsten'
        }]
      }, {
        event: {
          name: 'Universal Vibes',
          date: '2017-02-12',
          venue: 'Magic Roundabout',
          address: 'The Magic Roundabout, 16 St Agnes Well, London, EC1Y 1BE',
          ticketPrice: '£40',
          description: 'PBS and Paddy Freeform bring the summer vibes back to the best indoor / outdoor bar in London!',
          startTime: '10pm',
          eventType: 'Nightclub',
          location: {
            lat: 51.525877,
            lng: -0.087166
          }
        },
        bar: {
          name: 'The Angel',
          address: '73 City Rd, London EC1Y 1BD',
          website: 'http://www.theangelcityroad.co.uk',
          openingHours: {
            monday: '12pm - 12am',
            tuesday: '12pm - 12am',
            wednesday: '12pm - 12am',
            thursday: '12pm - 12am',
            friday: '12pm - 1am',
            saturday: '12pm - 1am',
            sunday: '12pm - 11pm'
          },
          location: {
            lat: 51.524732,
            lng: -0.087392
          }
        },
        restaurant: {
          name: 'Lantana Shoreditch',
          address: '2, Oliver’s Yard, 55 City Rd, London EC1Y 1HQ',
          website: 'http://www.lantanacafe.co.uk',
          openingHours: {
            monday: '7:30am-11pm',
            tuesday: '8:30am-9pm',
            wednesday: '8:30am-11pm',
            thursday: '8:30am-10pm',
            friday: '8:30am-11pm',
            saturday: '9am-11pm',
            sunday: '11:30am-10pm'
          },
          location: {
            lat: 51.524372,
            lng: -0.087327
          }
        },
        creator: users[3],
        attendees: [{
          userId: '5b34b361ea774b11d879d91d',
          firstName: 'Gerry',
          lastName: 'Mathe'
        }]
      }, {
        event: {
          name: 'Justin Timberlake: The Man of the Woods Tour',
          date: '2018-09-12',
          venue: 'Arena Birmingham',
          address: 'King Edwards Rd, Birmingham, B1 2AA, Birmingham, United Kingdom',
          ticketPrice: '£24',
          description: 'Justin Timberlake appears at his sold out tour, singing all his classics and a few new ones',
          startTime: '6pm',
          eventType: 'Concert',
          location: {
            lat: 52.479787,
            lng: -1.915033
          }
        },
        bar: {
          name: 'Malt House',
          address: '75 King Edwards Rd, Birmingham B1 2NX',
          website: 'http://www.greeneking-pubs.co.uk',
          openingHours: {
            monday: '11am - 11pm',
            tuesday: '11am - 11pm',
            wednesday: '11am - 11pm',
            thursday: '11am - 11pm',
            friday: '11am - 12am',
            saturday: '11am - 12am',
            sunday: '11am - 11pm'
          },
          location: {
            lat: 52.479392,
            lng: -1.913412
          }
        },
        restaurant: {
          name: 'Ed’s Easy Diner',
          address: 'Barclaycard Arena, King Edwards Rd, Birmingham B1 2AA',
          website: 'http://www.edseasydiner.com',
          openingHours: {
            monday: '10am-7pm',
            tuesday: '10am-7pm',
            wednesday: '10am-7pm',
            thursday: '10am-7pm',
            friday: '10am-7pm',
            saturday: '9am-8pm',
            sunday: '10am-7pm'
          },
          location: {
            lat: 52.479274,
            lng: -1.914883
          }
        },
        creator: users[4],
        attendees: [{
          userId: '5b34b361ea774b11d879d91b',
          firstName: 'Martin',
          lastName: 'Allgood'
        }]
      }, {
        event: {
          name: 'British Summer Time : Michel Buble',
          date: '2018-07-13',
          venue: 'Hyde Park',
          address: 'Hyde Park, W2 2UH',
          ticketPrice: '£21',
          description: 'Michel Buble returns for the British Summer Time festival at hyde park',
          startTime: '8pm',
          eventType: 'Concert',
          location: {
            lat: 51.507557,
            lng: -0.165762
          }
        },
        bar: {
          name: 'The Arch Bar',
          address: '1 Hamilton Pl, Mayfair, London W1J 7QY',
          website: 'http://www.london.intercontinental.com',
          openingHours: {
            monday: '8am - 1:30am',
            tuesday: '8am - 1:30am',
            wednesday: '8am - 1:30am',
            thursday: '8am - 1:30am',
            friday: '8am - 1:30am',
            saturday: '8am - 1:30am',
            sunday: '8am - 1:30am'
          },
          location: {
            lat: 51.503800,
            lng: -0.150738
          }
        },
        restaurant: {
          name: 'Hard Rock Cafe London',
          address: '150 Old Park Ln, Mayfair, London W1K 1QZ',
          website: 'http://www.hardrock.com',
          openingHours: {
            monday: '11:30am-12:30am',
            tuesday: '11:30am-12:30am',
            wednesday: '11:30am-12:30am',
            thursday: '11:30am-12:30am',
            friday: '11:30am-11pm',
            saturday: '11:30am-1am',
            sunday: '11:30am-10:30pm'
          },
          location: {
            lat: 51.503911,
            lng: -0.149088
          }
        },
        creator: users[5],
        attendees: [{
          userId: '5b34b361ea774b11d879d91e',
          firstName: 'Martin',
          lastName: 'Koeoep'
        }]
      }, {
        event: {
          name: 'Foodie Friday',
          date: '2018-01-05',
          venue: 'The Glee Club',
          address: 'Unit 7a, Mermaid Quay, Cardiff Bay, Cardiff CF10 5BZ',
          ticketPrice: '£15.95',
          description: 'Four superb stand-up comedians and a great range of tasty food offerings',
          startTime: '8pm',
          eventType: 'Comedy',
          location: {
            lat: 51.463602,
            lng: -3.165877
          }
        },
        bar: {
          name: 'The Mount Stuart',
          address: 'Landsea House, Stuart Pl, Cardiff CF10 5BU',
          website: 'http://www.jdwetherspoon.com',
          openingHours: {
            monday: '8am - 12am',
            tuesday: '8am - 12am',
            wednesday: '8am - 12am',
            thursday: '8am - 12am',
            friday: '8am - 1am',
            saturday: '8am - 1am',
            sunday: '8am - 12am'
          },
          location: {
            lat: 51.462633,
            lng: -3.166445
          }
        },
        restaurant: {
          name: 'Bill\'s Cardiff Bay Restaurant',
          address: 'Pilotage Bldg, 5bw, Stuart St, Cardiff CF10 5BW',
          website: 'http://www.bills-website.co.uk',
          openingHours: {
            monday: '8am-11pm',
            tuesday: '8am-11pm',
            wednesday: '8am-11pm',
            thursday: '8am-11pm',
            friday: '8am-11pm',
            saturday: '8am-11pm',
            sunday: '9am-10:30pm'
          },
          location: {
            lat: 51.463014,
            lng: -3.166413
          }
        },
        creator: users[6],
        attendees: [{
          userId: '5b34b361ea774b11d879d91a',
          firstName: 'James',
          lastName: 'Newell'
        }]
      }, {
        event: {
          name: 'Don Giovanni',
          date: '2018-07-03',
          venue: 'Royal Opera House',
          address: 'Bow St, London WC2E 9DD',
          ticketPrice: '£170',
          description: 'In Mozart’s dazzling tragicomic opera, Marc Minkowski conducts a world-class cast led by Mariusz Kwiecień with Ildebrando D’Arcangelo, Rachel Willis-Sørensen, Pavol Breslik and Hrachuhi Bassenz.',
          startTime: '8pm',
          eventType: 'Concert',
          location: {
            lat: 51.512977,
            lng: -0.122141
          }
        },
        bar: {
          name: 'Be At One',
          address: '24-26 Russell St, London WC2B 5HF',
          website: 'http://www.beatone.co.uk/',
          openingHours: {
            monday: '4:30pm - 3am',
            tuesday: '4:30pm - 3am',
            wednesday: '4:30pm - 3am',
            thursday: '4:30pm - 3am',
            friday: '4:30pm - 3am',
            saturday: '4:30pm - 3am',
            sunday: '4:30pm - 12:30am'
          },
          location: {
            lat: 51.512957,
            lng: -0.120913
          }
        },
        restaurant: {
          name: 'Barrafina',
          address: '43 Drury Ln, Covent Garden, London WC2B 5AJ',
          website: 'http://www.barrafina.co.uk',
          openingHours: {
            monday: '5pm-11pm',
            tuesday: '5pm-11pm',
            wednesday: '5pm-11pm',
            thursday: '5pm-11pm',
            friday: '5pm-11pm',
            saturday: '5pm-11pm',
            sunday: '5pm-10pm'
          },
          location: {
            lat: 51.514352,
            lng: -0.121911
          }
        },
        creator: users[0],
        attendees: [{
          userId: '5b325bc4cbc256270346f579',
          firstName: 'Bianca',
          lastName: 'Jemsten'
        }]
      }]);
    })
    .then(bundles => console.log(`${bundles.length} Bundle(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
