import React from 'react';

const PermimeterTriangle = () => {
  //MINPERIMETERRECTANGLE

  let N = 36;

  let S = Math.sqrt(N);
  console.log('S:', S);

  let G = Math.ceil(S);
  console.log('G:', G);

  let highestFactor = null;

  for (let i = G; i > 0; i--) {
    console.log('i:', i);
    if (N % i === 0) {
      console.log('Factor:', i);
      highestFactor = i;
      break;
    }
  }
  console.log('HF:', highestFactor);
  let secondFactor = N / highestFactor;
  console.log('SF:', secondFactor);

  let P = 2 * highestFactor + 2 * secondFactor;
  console.log(P);
  return <div>PermimeterTriangle</div>;
};

export default PermimeterTriangle;
