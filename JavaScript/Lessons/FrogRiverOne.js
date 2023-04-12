import React from 'react';

const FrogRiverOne2 = () => {
  // FROGRIVERONE

  let X = 5;
  let A = [1, 3, 1, 4, 2, 3, 5, 4];
  //time = 0, 1, 2, 3, 4, 5, 6, 7

  let P = new Array(X).fill(false);

  for (let i = 0; i < A.length; i++) {
    P[A[i] - 1] = true;

    if (P.every((element) => element === true)) {
      return i;
    }
  }

  return -1;
  return <div>FrogRiverOne2</div>;
};

export default FrogRiverOne2;
