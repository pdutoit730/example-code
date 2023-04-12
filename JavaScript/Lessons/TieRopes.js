import React from 'react';

const TieRopes = () => {
  //TIEROPES

  let A = [1, 2, 4, 4, 3];
  let K = 4;
  let count = 0;
  let part = 0;

  for (let i = 0; i < A.length; i++) {
    console.log('START');
    console.log('i:', i);
    console.log('A[i]:', A[i]);
    console.log('part:', part);
    console.log('start count:', count);
    if (A[i] >= K) {
      count++;
      part = 0;
    } else if (A[i] < K) {
      part = part + A[i];
      if (part >= K) {
        count++;
        part = 0;
      }
    }
    console.log('END count:', count);
  }

  console.log('count:', count);
  return <div>TieRopes</div>;
};

export default TieRopes;
