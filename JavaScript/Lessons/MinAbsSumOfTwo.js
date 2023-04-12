import React from 'react';

const MinAbsSumOfTwo = () => {
  // MINABSSUMOFTWO
  let A = [-8, 4, 5, -10, 3];

  A.sort((a, b) => a - b);
  console.log(A);

  if (A.includes(0)) {
    return 0;
  }

  let min = Math.min(...A);
  console.log('min:', min);

  let max = Math.max(...A);
  console.log('max:', max);

  if (min >= 0) {
    return 2 * min;
  }

  if (max <= 0) {
    return Math.abs(2 * max);
  }

  let index = A.findIndex((num) => num > 0);
  console.log('index:', index);

  let head = A.length - 1;
  let tail = 0;

  let absMin = Math.abs(A[head] - A[tail]);

  while (head >= index && tail <= index) {
    console.log('START - tail:', tail, 'head:', head);

    let localMin = A[tail] + A[head];
    console.log('localMin:', localMin);

    if (Math.abs(localMin) < absMin) {
      absMin = Math.abs(localMin);
    }

    if (localMin > 0) {
      head--;
    } else {
      tail++;
    }

    console.log('END - tail:', tail, 'head:', head);
  }

  console.log('return:', absMin);
  2 * N[N.length - 1];

  return <div>MinAbsSumOfTwo</div>;
};

export default MinAbsSumOfTwo;
