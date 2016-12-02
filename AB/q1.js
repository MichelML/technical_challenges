// Dependencies
function FlightRepository() {
  // FlightRepo properties and methods
  // ...
}

function AirportAnnouncer() {
  // AirportAnnoucer properties and methods
  // ...
}

function FlightService(dependencies) {

  this.dependencies = dependencies;

  this.delayFlight = (flight, newTime) => {
    flight.delay(newTime);

    flightRepository = new this.dependencies.FlightRepository();
    flightRepository.persist(flight);
    if (flight.isDeparture()) {
      announcer = new this.dependencies.AirportAnnouncer();
      announcer.announceTimeChanged(flight);
    }
  }
}

// instance of class with dependency injection
flightService = new FlightService({
  FlightRepository: FlightRepository,
  AirportAnnouncer: AirportAnnouncer
});

// Test suits
describe('Flight', () => {
  // test that class Flight exist
  // test if the class has method delay,
  // test if the method modifies the time of a flight object to a new time in the future
  // test if the class has method isDeparture
  // test if the method isDeparture returns a boolean according to different possible scenarios
});

describe('FlightRepository', () => {
  // test that class FlightRepository exists
  // test if the Class has method persist
});


describe('AirportAnnouncer', () => {
  // test if class AirportAnnouncer exists
  // test if the class method announceTimeChanged
  // test if the flight time has been properly announced according to different possible scenarios
});

describe('FlightService', () => {
  // test that class FlightService exist

  describe('delayFlight method', () => {
    // test that delay flight exist
    // the most important things that should be tested in this method is
    // 1) if the flight.delay(newTime) has changed the time of the flight correctly after invocation
    // 2) if the flight information is updated properly in the flightRepository and flightRepository.persist is called
    // 3) if the announcer.announceTimeChanged(flight) has announced the new flight time properly according to the business logic
    // We could design different scenarios to test these three things in our test suite
    // The other parts of the function should be tested in other test suits, namely in the Flight, FlightRepository, and AirportAnnouncer suits 
  });
});

