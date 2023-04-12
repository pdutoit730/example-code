import React from 'react';

const EuclideanAlgorithm = () => {
  //
  let a = 33;
  let b = 24;
  let r = null;

  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
    console.log('R:', r);
    console.log('A:', a);
    console.log('B:', b);
  }
  return a;

  return <div>EuclideanAlgorithm</div>;
};

export default EuclideanAlgorithm;
