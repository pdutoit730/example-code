import React from 'react';

const Triangle = () => {
  // TRIANGLE
  let A = [10, 50, 5, 1];
  console.log(A);
  A.sort((a, b) => a - b);
  console.log(A);

  for (let i = 0; i < A.length - 2; i++) {
    console.log('i:', i);
    if (
      A[i] + A[i + 1] > A[i + 2] &&
      A[i + 1] + A[i + 2] > A[i] &&
      A[i + 2] + A[i] > A[i + 1]
    ) {
      console.log('answer:', 1);
      return 1;
    }
  }

  console.log('answer:', 0);
  return 0;
  return <div>Triangle</div>;
};

export default Triangle;
