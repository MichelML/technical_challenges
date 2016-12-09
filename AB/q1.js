const Dependencies = {};
Dependencies.inject = function inject(instance, dependencies = []) {
  if (!Array.isArray(dependencies)) {
    throw "inject takes an array of key/value pair objects as a parameter";
  }

  instance.dependencies = instance.dependencies || {};
  dependencies.forEach((dependency) => {
    instance.dependencies[Object.keys(dependency)[0]] = dependency[Object.keys(dependency)[0]]; 
  });
};

/* Dummy Object Constructors */
function FlightRepository(value) { this.value = value; }
const flightRepository = new FlightRepository(1);

function AirportAnnouncer(value) { this.value = value; }
const airportAnnouncer = new AirportAnnouncer(1);

function Flight(id , time, departureOrArrival) { 
  const self = this;
  const typeOfFlight = departureOrArrival;

  self.id = id; 
  self.time = time;  

  self.isDeparture = () => {
    return (departureOrArrival === "departure") ? true : false;
  };

  self.delay = (newTime) => {
    self.departureTime = newTime;
  };
}

/* Half-dummy object constructor */
function FlightService(dependencies) {
  const self = this;

  Dependencies.inject(self, dependencies);

  self.delayFlight = (flight, newTime) => {
    flight.delay(newTime);

    self.dependencies.flightRepository.persist(flight);
    if (flight.isDeparture()) {
      self.dependencies.announcer.announceTimeChanged(flight);
    }
  };
}

// instance of FlightService with dependency injection
const flightService = new FlightService([ { flightRepository }, { airportAnnouncer } ]);

describe('FlightService', () => {
  let flightService
  let flight;
  let announcer;
  let flightRepository;
  let dateInTheFuture;

  beforeEach(() => {
   flightService = new FlightService([ {flightRepository}, {airportAnnouncer}]);
   flightRepository = new FlightRepository();
   announcer = new AirportAnnouncer();
   flight = new Flight("932408750329", new Date(), "departure");
   dateInTheFuture = new Date(flight.time * 1000*60*60);
  });

  describe('delayFlight method', () => {
    it('exists as a function', () => {
      expect(typeof flightService.delayFlight === "function").toBe(true);
    });

    it('delays time of a flight', () => {
     let oldDepartureTime = flight.time;
     flightService.delayFlight(flight, dateInTheFuture);
     expect(flight.time > oldDepartureTime).toBe(true);
    });

    it('updates the flight in the flightRepository', () => {
     let oldDepartureTime = flight.time;
     flightService.delayFlight(flight, dateInTheFuture);
     expect(flightRepository.get(flight.id).time > oldDepartureTime).toBe(true);
    });

    it('announces the new time of a flight if the latter is a departure flight', () => {
     let oldTimeAnnounced = announcer.getCurentTimeAnnounced(flight.id);
     flightService.delayFlight(flight, dateInTheFuture);
     let newTimeAnnounced = announcer.getCurentTimeAnnounced(flight.id);
     expect(newTimeAnnounced > oldTimeAnnounced).toBe(true);
    });

    it('does not change the announced time of flight if the latter is an arrival flight', () => {
     flight = new Flight("932408750329", new Date(), "arrival");
     let oldTimeAnnounced = announcer.getCurentTimeAnnounced(flight.id);
     flightService.delayFlight(flight, dateInTheFuture);
     let newTimeAnnounced = announcer.getCurentTimeAnnounced(flight.id);
     expect(newTimeAnnounced === oldTimeAnnounced).toBe(true);
    });
  });
});
