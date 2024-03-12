/** @format */

function countPrimeNumbers() {
  let count = 0;

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  return count;
}

function runCountPNkTimes(n) {
  const startTime = performance.now();
  for (let k = 0; k < n; k++) {
    countPrimeNumbers();
  }
  const endTime = performance.now();
  console.log(
    `Execution time of calculating prime numbers ${n} times was ${
      endTime - startTime
    } milliseconds.`
  );
}

runCountPNkTimes(100);
