import React from 'react';

const CountBoundedSlices = () => {
  // COUNTBOUNDEDSLICES
  let A = [3, 5, 7, 6, 3];
  let B = [3, 3, 5, 6, 7];
  let K = 2;
  let count = 0;

  for (let tail = 0; tail < A.length; tail++) {
    let head = tail + 1;
    console.log('TAIL:', tail);
    console.log('HEAD:', head);
    while (head <= A.length) {
      let arr = A.slice(tail, head);
      console.log(arr);
      let min = Math.min(...arr);
      let max = Math.max(...arr);
      let diff = max - min;
      console.log('min:', min);
      console.log('max:', max);
      console.log('diff:', diff);
      if (diff <= K) {
        count++;
        head++;
      } else {
        break;
      }
    }
  }

  console.log('count:', count);

  return <div>CountBoundedSlices</div>;
};

export default CountBoundedSlices;
