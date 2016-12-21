function consecSumWithIntervals(n) {
  let count = 0;
  let loopStart = Math.round(n/2);

  for (let i = loopStart; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      if (((j+i)/2 * (i - j + 1)) === n) {
        console.log(j + ' to ' + i);
        count++;
        break;
      }
    }
  }

  return count;
}


function consecSum(n) {
  let count = 0;
  let loopStart = Math.round(n/2);

  for (let i = loopStart; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      if (((j+i)/2 * (i - j + 1)) === n) {
        count++;
        break;
      }
    }
  }

  return count;
}

/*** TESTS ***/
console.log(consecSum(15) === 3);
console.log(consecSum(9) === 2);
console.log(consecSum(2) === 0);
console.log(consecSum(3) === 1);
console.log(consecSum(6) === 1);
console.log(consecSum(30) === 3);

