import React from 'react';

const ParityDegree = () => {
  //PARITYDEGREE

  let N = 1;
  let K = 1;

  let max = Math.floor(Math.sqrt(N));
  console.log(max);

  for (let i = 0; i <= max; i++) {
    if (N % Math.pow(2, i) === 0) {
      K = i;
    }
  }

  console.log(K);
  return <div>ParityDegree</div>;
};

export default ParityDegree;
