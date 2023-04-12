import React from 'react';

const CountNonDivsible = () => {
  //COUNT NON DIVISIBLE
  let A = [3, 1, 3, 1, 3, 1, 3];
  let B = new Array(A.length);
  let count = 0;

  if (A.length > 50000) {
    return;
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (i !== j) {
        if (A[i] % A[j] !== 0) {
          count++;
        }
      }
    }
    B[i] = count;
    count = 0;
  }

  console.log(B);
  return <div>CountNonDivsible</div>;
};

export default CountNonDivsible;
