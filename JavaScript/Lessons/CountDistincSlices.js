import React from 'react';

const CountDistincSlices = () => {
  // COUNTDISTINCTSLICES

  let A = [1, 1, 1, 1, 1, 1, 2, 2];
  let count = 0;
  let back = 0;
  let front = 1;

  while (front <= A.length) {
    let B = A.slice(back, front);
    console.log('B:', B);

    if (new Set(B).size === B.length) {
      // if it has no dups
      let size = B.length;
      console.log('size:', size);
      count = count + size;
      front++;
    } else {
      back++;
    }

    console.log('front:', front);
    console.log('back:', back);
    console.log('count:', count);
  }

  console.log('count:', count);

  return <div>CountDistincSlices</div>;
};

export default CountDistincSlices;
