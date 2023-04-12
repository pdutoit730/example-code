import React from 'react';

const AbsDistinct = () => {
  // ABSDISTINCT

  let A = [-5, -3, -1, 0, 3, 6];

  let B = A.map((num) => (num = Math.abs(num)));

  let C = B.sort((a, b) => a - b);
  console.log(C);

  let D = [];

  for (let i = 0; i < A.length; i++) {
    if (C[i] !== C[i + 1]) {
      D.push(C[i]);
    }
  }

  console.log(D);
  return D.length;
  return <div>AbsDistinct</div>;
};

export default AbsDistinct;
