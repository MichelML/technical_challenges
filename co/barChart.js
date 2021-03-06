/*
 * Problem:
 * Given a random bar chart represented by an array of numbers (be it numbers with or without decimals), 
 * design a function that will return the total fillable area units in the bar chart, or in other words, the sum
 * of all concaves area in the bar chart.
 * Examples:
 * getTotalFillableAreaUnits() with a bar chart [5,1,1,5] as its argument should return 8
 * getTotalFillableAreaUnits() with a bar chart [5,1,8,3,9,2] as its argument should return 9
 * and so on...
 * See tests at line 68 for more examples
 */

/*
 * Strategy:
 * Look for largest fillable hole starting at position i for every position in barChart until barChart.length - 2 is evaluated inclusively
 * if a fillable hole is found at position i, add fillable area units of hole to totalFillableAreaUnits count, 
 * and continue evaluation while skipping the evaluation of positions inside current fillable hole (positions i+1 to holeEnd-1)
 */

/**
 * Return the total fillable area units in a bar chart
 * @param {Number[]} barChart
 * @returns {Number}
 */
function getTotalFillableAreaUnits(barChart) {
  let fillLimit;
  let holeStartIndex = 0;
  let holeEndIndex;
  let totalFillableAreaUnits = 0;
  let i, j, k;

  for (i = 0; i < barChart.length - 2; i++) {
    holeStartIndex = i;
    for (j = barChart.length - 1; j >= holeStartIndex + 2; j--) {
      holeEndIndex = j;
      fillLimit = (barChart[holeStartIndex] <= barChart[holeEndIndex]) ? barChart[holeStartIndex] : barChart[holeEndIndex];
      if (isFillableHole(barChart, holeStartIndex, holeEndIndex, fillLimit)) {
        for (k = holeStartIndex + 1; k < holeEndIndex; k++) {
          totalFillableAreaUnits += fillLimit - barChart[k];
        }
        i = holeEndIndex - 1;
        break;
      } 
    }
  }

  return totalFillableAreaUnits;
}

/**
  * Verify if a potential hole is a fillable hole. 
  * Return true if it is a fillable hole, otherwise return false.
  * @param {Number[]} barChart
  * @param {Number} holeStartIndex
  * @param {Number} holeEndIndex
  * @param {Number} fillLimit
  * @returns {Boolean}
  **/
function isFillableHole(barChart, holeStartIndex, holeEndIndex, fillLimit) {
    for (let h = holeStartIndex + 1; h < holeEndIndex; h++) {
      if (barChart[h] >= fillLimit) {
        return false;
      } 
    } 
    return true;
}

/*** TESTS ***/
console.log(getTotalFillableAreaUnits([]) === 0);
console.log(getTotalFillableAreaUnits([1]) === 0);
console.log(getTotalFillableAreaUnits([1,2]) === 0);
console.log(getTotalFillableAreaUnits([5,1,1,5]) === 8); 
console.log(getTotalFillableAreaUnits([5,1,1,1,5]) === 12);
console.log(getTotalFillableAreaUnits([5,1,8,3,9,2]) === 9); 
console.log(getTotalFillableAreaUnits([10,9,8,3,2,1]) === 0);
console.log(getTotalFillableAreaUnits([1,2,3,4,5,6,7]) === 0);
console.log(getTotalFillableAreaUnits([1,1,1,1,1,1,1,1,1,1,1,1]) === 0);
console.log(getTotalFillableAreaUnits([1,2,3,4,5,6,5,4,3,2,1,1]) === 0);
console.log(getTotalFillableAreaUnits([2,1,2,1,2,1,2,1,2,1,2,1]) === 5);
console.log(getTotalFillableAreaUnits([5,1,1,1,1,2,2,2,2,2,5]) === 31);
console.log(getTotalFillableAreaUnits([5,1,1,1,1,2,2,2,2,2,5,4,8,4,5]) === 33);
console.log(getTotalFillableAreaUnits([1,2,6,4,3,6,10,6,5,4,8,3,2,5,4,3,1,2,7,2]) === 43); 
console.log(getTotalFillableAreaUnits([1.25,2.25,6.25,4.25,3.25,6.25,10.25,6.25,5.25,4.25,8.25,3.25,2.25,5.25,4.25,3.25,1.25,2.25,7.25,2.25]) === 43);
console.log((getTotalFillableAreaUnits([1.25,2.25,6.25,4.25,3.25,6.25,10.25,6.25,5.25,4.25,8.25,3.25,2.25,5.25,4.25,3.25,1.25,2.25,7.5,2.25])).toFixed(2) === (44.75).toFixed(2));


