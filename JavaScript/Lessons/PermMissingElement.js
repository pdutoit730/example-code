import React from 'react';

const PermMissingElement = () => {
  // PERMMISSINGELEMENT
  let A = [1, 2, 3];
  A.sort((a, b) => a - b);
  console.log(A);

  if (A[0] !== 1) {
    return 1;
  }

  if (A.length === 0) {
    return 1;
  }

  if (A.length > 100000) {
    return;
  }

  for (let i = 0; i < A.length; i++) {
    console.log(i);
    if (A[i] + 1 !== A[i + 1]) {
      return A[i] + 1;
    }
  }

  return <div>PermMissingElement</div>;
};

export default PermMissingElement;
