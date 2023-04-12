import React from 'react';

const ChocolatesByNumbers = () => {
  //CHOCOLATESBYNUMBERS

  let N = 2;
  let M = 2;
  let count = 0;

  let A = new Array(N).fill(1);

  //A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  console.log(A);

  for (let i = 0; i < N; i++) {
    console.log(i);
    if (A[i] === 1) {
      A[i] = 0;
      i = ((i + M) % N) - 1;
      count++;
    } else if (A[i] === 0) {
      console.log('count:', count);
      return count;
    }
  }

  console.log(A);
  return count;

  return <div>ChocolatesByNumbers</div>;
};

export default ChocolatesByNumbers;
