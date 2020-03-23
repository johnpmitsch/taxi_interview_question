
///////////////////////////// INTRODUCTION /////////////////////////////

/*
 We have a taxi ride dataset for NYC taxis in January 2019.
 This contains an array of rides that look like this:

 {
  VendorID: 1,
  tpep_pickup_datetime: '2019-01-01 00:46:40',
  tpep_dropoff_datetime: '2019-01-01 00:53:20',
  passenger_count: 1,
  trip_distance: 1.5,
  RatecodeID: 1,
  store_and_fwd_flag: 'N',
  PULocationID: 151,
  DOLocationID: 239,
  payment_type: 1,
  fare_amount: 7,
  extra: 0.5,
  mta_tax: 0.5,
  tip_amount: 1.65,
  tolls_amount: '0',
  improvement_surcharge: 0.3,
  total_amount: 9.95
 }

 You will answer questions about this data

GUIDELINES:
 - You can use google and documentation as reference
 - You can run the code and the tests as many times as needed
 - Ask questions if you are not sure about something in the question or the coderpad environment
 - Work as you would normally work
*/

//The taxi data is imported as a an array of rides called taxiData, which you will use in the questions.
const taxiData = require("./data/taxi_data_01_2019_short.json");


///////////////////////////// QUESTIONS /////////////////////////////

/*
 QUESTION 1: Fill out the tipsPerPassengerCount function below to find how many rides with a certain amount of passengers (passenger_count) gave a tip (tip_amount)?

 The `passengers` argument is the passed in amount of passengers

 For example:
 tipsPerPassengerCount(2) will find the amount of rides with 2 passengers where a tip was left.*/
const tipsPerPassengerCount = (passengers) => {
  // fill in here
}

/*
  Change RUN_QUESTION_ONE_TESTS to true when you want to check your output.
  There is no penalty for failed tests so feel free to run the tests as many times as you would like.
*/
const RUN_QUESTION_ONE_TESTS = false


/*
  QUESTION 2: Can you write a function that returns the furthest ride taken (trip_distance) for a given amount of passengers (passenger_count)?
  If there are no rides for the amount of passengers, the function should return null.

  For example:
  furthestRidePerPassenger(1) would return the furthest ride taken by 1 passenger
*/
const furthestRidePerPassenger = (passengers) => {
  // fill in here
}

/*
  Change RUN_QUESTION_TWO_TESTS to true when you want to check your output.
  There is no penalty for failed tests so feel free to run the tests as many times as you would like.
*/
const RUN_QUESTION_TWO_TESTS = false


/*
  Write a function to show the average tip (tip_amount) for a particular trip distance range (trip_distance)
  If no rides are within that range, return null

  For Example:
  averageTip(2, 3) would return the average tip for rides with distances between 2 miles to 3 miles.

  The range should be inclusive, in this example both 2.0 and 3.0 miles are included.
  You do not have to round the result to 2 decimal places, but the tests can account for rounded answers too.

*/
const averageTip = (start, end) => {
  // fill in here
}

/*
  Change RUN_QUESTION_THREE_TESTS to true when you want to check your output.
  There is no penalty for failed tests so feel free to run the tests as many times as you would like.
*/
const RUN_QUESTION_THREE_TESTS = false


///////////////////////////// TESTS /////////////////////////////

// Tests - please do not edit below this line

var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha)

if (RUN_QUESTION_ONE_TESTS) {
  describe('tipsPerPassengerCount', function() {
    it('returns correctly for 1 passenger', function() {
      assert.equal(tipsPerPassengerCount(1), 366)
    })
    it('returns correctly for 2 passengers', function() {
      assert.equal(tipsPerPassengerCount(2), 152)
    })
    it('returns correctly for 3 passengers', function() {
      assert.equal(tipsPerPassengerCount(3), 31)
    })
    it('returns correctly for 3 passengers', function() {
      assert.equal(tipsPerPassengerCount(4), 25)
    })
  })
}

if (RUN_QUESTION_TWO_TESTS) {
  describe('furthestRidePerPassenger', function() {
    it('returns correctly for 1 passenger', function() {
      assert.equal(furthestRidePerPassenger(1), 31.57)
    })
    it('returns correctly for 2 passengers', function() {
      assert.equal(furthestRidePerPassenger(2), 20.01)
    })
    it('returns correctly for 3 passengers', function() {
      assert.equal(furthestRidePerPassenger(3), 15.1)
    })
    it('returns correctly for 4 passengers', function() {
      assert.equal(furthestRidePerPassenger(4), 18.1)
    })
    it('returns null for an invalid amount', function() {
      assert.equal(furthestRidePerPassenger(100), null)
    })

  })
}

if (RUN_QUESTION_THREE_TESTS) {
  describe('averageTip', function() {
    it('returns correctly for 1 to 2', function() {
      assert.equal(averageTip(1,2).toFixed(2), 1.2425236593059938.toFixed(2));
    })
    it('returns correctly for 2 to 3', function() {
      assert.equal(averageTip(2,3).toFixed(2), 1.675194805194805.toFixed(2));
    })
    it('returns correctly for 10 to 15', function() {
      assert.equal(averageTip(10,15).toFixed(2), 4.30157894736842.toFixed(2));
    })
    it('returns correctly for 1 to 100', function() {
      assert.equal(averageTip(1,100).toFixed(2), 1.9075880052151228.toFixed(2));
    })
    it('returns null for invalid selection', function() {
      assert.equal(averageTip(999,1000), null);
    })
  })
}

if (RUN_QUESTION_ONE_TESTS || RUN_QUESTION_TWO_TESTS || RUN_QUESTION_THREE_TESTS) {
  mocha.run();
}
