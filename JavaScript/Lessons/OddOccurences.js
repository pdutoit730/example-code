import React from 'react';

const OddOccurences = () => {
  //
  let A = [9, 3, 1, 3, 7, 1, 9];

  let B = A.sort();

  for (let i = 0; i < A.length; i++) {
    if (B[i] === B[i + 1]) {
      i++;
    } else {
      return B[i];
    }
  }

  return <div>OddOccurences</div>;
};

export default OddOccurences;
