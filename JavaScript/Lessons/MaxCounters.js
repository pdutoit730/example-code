import React from 'react';

const MaxCounters = () => {
  // MAXCOUNTERS
  let N = 5;
  let A = [3, 4, 4, 6, 1, 4, 4];

  let C = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    let curMax = Math.max(...C);

    if (A[i] === N + 1) {
      C.fill(curMax);
    } else {
      C[A[i] - 1] = C[A[i] - 1] + 1;
    }
  }
  return C;

  return <div>MaxCounters</div>;
};

export default MaxCounters;
