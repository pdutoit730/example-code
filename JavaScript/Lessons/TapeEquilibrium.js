import React from 'react';

const TapeEquilibrium = () => {
  // TAPE EQUILIBRIUM

  let A = [1, 2, 3, 4];

  let rightSum = A.reduce((prevVal, curVal) => prevVal + curVal) - A[0];
  let leftSum = A[0];
  let minDiff = Math.abs(leftSum - rightSum);
  let diff = [minDiff];

  for (let i = 1; i < A.length - 1; i++) {
    leftSum = leftSum + A[i];
    rightSum = rightSum - A[i];
    minDiff = Math.abs(leftSum - rightSum);
    diff[i] = minDiff;

    console.log(
      'LS:',
      leftSum,
      'RS:',
      rightSum,
      'minDiff:',
      minDiff,
      'diff:',
      diff
    );
  }

  return Math.min(...diff);

  return <div>TapeEquilibrium</div>;
};

export default TapeEquilibrium;
