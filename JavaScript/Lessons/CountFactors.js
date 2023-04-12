import React from 'react';

const CountFactors = () => {
  //COUNTFACTORS

  let N = 3;

  if (N === 1) {
    return 1;
  }

  let count = 2;

  for (let i = 2; i <= N / 2; i++) {
    if (N % i === 0) {
      console.log(i);
      count++;
    }
  }

  return count;
};

return <div>CountFactors</div>;

export default CountFactors;
