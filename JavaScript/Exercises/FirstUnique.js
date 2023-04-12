import React from 'react';

const FirstUnique = () => {
  // FIRSTUNIQUE
  let A = [1, 5, 6, 3, 5, 1];
  let B = [];
  let C = [];

  for (let i = 0; i < A.length; i++) {
    console.log(i);
    if (!B.includes(A[i])) {
      B.push(A[i]);
    } else {
      C.push(A[i]);
    }
  }
  console.log('B:', B);
  console.log('C:', C);

  for (let i = 0; i < B.length; i++) {
    console.log(i);
    if (!C.includes(B[i])) {
      return B[i];
    }
  }

  return -1;
  return <div>FirstUnique</div>;
};

export default FirstUnique;
