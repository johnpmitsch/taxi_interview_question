const taxiData = require("./taxi_data_01_2019_short.json")

/**
 * Rules:
 * - Fill in the function according to directions and get the question to pass the tests
 * - You can use google and documentation as much as you would like
 * - Feel free to ask any clarifying questions
 * - You can run your code and the tests as much as you need. There is no penalty for failed tests.
 *
 * (there will be tests on the coderpad, but none here yet)
 *   
 * Looking for
 * - Basic coding principles
 * - Knowledge of JS std library
 * - Efficency looping through data
 */ 
 
/**
 * Write a function find how many rides with 2 passengers (passenger_count) gave a tip (tip_amount)?
 */

const passengerAmountTip = (passengerCount) => {
  count = 0
  taxiData.map(ride => {
    if (ride.passenger_count === passengerCount && ride.tip_amount > 0) {
      count += 1;
    }
  });
  return count;
}

// 152


/**
 * Can you write a function that returns the furthest ride taken (trip_distance) for a given amount of passengers (passenger_count)? 
 * If there are no rides for the amount of passengers, the function should return null.
 */

const furthestRide = (passengerCount) => {
  let count = 0
  ridesForPassenger = taxiData.filter(ride => ride.passenger_count === passengerCount)
  if (!ridesForPassenger) return null
  const distances = ridesForPassenger.map(ride => ride.trip_distance)
  return Math.max(...distances);
}


/** 
 * Can you write a function to show the average tip (tip_amount) for a particular trip distance range (trip_distance)?
 * 
 * For Example:
 * averageTip(2, 3) would return the average tip for rides with distances between 2 miles to 3 miles. 
 *
 * The range should be inclusive, in this example both 2.0 and 3.0 miles are included.
 * You do not have to round the result to 2 decimal places
*/

const averageTip = (start, end) => {
  const ridesInRange = taxiData.filter(ride => ride.trip_distance >= start && ride.trip_distance <= end)
  let sum = 0.0;
  ridesInRange.map(ride => sum += Number(ride.tip_amount));
  return sum / ridesInRange.length;
}