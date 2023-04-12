import React from 'react';

const PermCheck = () => {
  //PERMCHECK
  let A = [1, 3, 3, 2, 5];

  let min = Math.min(...A);
  let max = Math.max(...A);
  let count = max - min + 1;
  let length = A.length;

  if (min !== 1) {
    return 0;
  }
  if (max !== length || count !== length) {
    return 0;
  }

  let B = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (B[i] !== i + 1) {
      return 0;
    }
  }

  return 1;
  return <div>PermCheck</div>;
};

export default PermCheck;
