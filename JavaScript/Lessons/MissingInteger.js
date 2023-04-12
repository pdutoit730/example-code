import React from 'react';

const MissingInteger = () => {
  // MISSINGINTEGER
  let A = [-1, 3, 5];

  A.sort((a, b) => a - b);
  console.log('A:', A);

  if (Math.max(...A) < 0) {
    return 1;
  }

  let B = A.filter((num) => num > 0);
  console.log('B:', B);

  if (B[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < B.length; i++) {
    console.log(i);
    if (B[i + 1] > B[i] + 1) {
      console.log('error');
      return B[i] + 1;
    }
  }

  return B[B.length - 1] + 1;

  return <div>MissingInteger</div>;
};

export default MissingInteger;
