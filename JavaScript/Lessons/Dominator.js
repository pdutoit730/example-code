import React from 'react';

const Dominator = () => {
  //DOMINATOR

  let A = [0, 0, 1, 1, 1];

  let B = new Array(A.length);

  let count = 0;

  for (let i = 0; i < A.length; i++) {
    B[i] = A[i];
  }

  B.sort((a, b) => a - b);

  let dominator = B[Math.floor(A.length / 2)];

  A.map((num) => {
    if (num === dominator) {
      count++;
    }
  });

  if (count <= A.length / 2) {
    return -1;
  }

  let domIndex = A.findIndex((num) => num === dominator);
  return domIndex;

  return <div>Dominator</div>;
};

export default Dominator;
