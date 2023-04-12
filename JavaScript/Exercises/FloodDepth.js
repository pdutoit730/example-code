import React from 'react';

const FloodDepth = () => {
  // FloodDepth

  let A = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2];
  let B = new Array(A.length).fill(0);
  console.log('B:', B);

  if (A[0] > A[1]) {
    B[0] = 1;
  } else {
    B[0] = 0;
  }

  if (A[A.length - 1] > A[A.length - 2]) {
    B[A.length - 1] = 1;
  } else {
    B[A.length - 1] = 0;
  }

  let peaks = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      B[i] = 1;
      peaks++;
    }
  }

  console.log('no of peaks:', peaks);

  let max = 0;
  let min = 0;
  let tail = 0;
  let head = 0;

  console.log('B:', B);

  while (tail < peaks) {
    console.log(tail);
    tail++;
  }
  return <div>FloodDepth</div>;
};

export default FloodDepth;
