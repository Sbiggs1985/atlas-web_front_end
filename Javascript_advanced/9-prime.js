/** @format */

function countPrimeNumbers() {
  const startTime = performance.now();
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

  const endTime = performance.now();
  console.log(
    `Execution time of counting prime numbers was ${
      endTime - startTime
    } milliseconds.`
  );
  return count;
}

console.log(countPrimeNumbers());
