import React from 'react';

const MaxProductOfThree = () => {
  // MAXPRODUCTOFTHREE

  let A = [1, 2, 3];
  console.log('A', A);
  let B = A.sort((a, b) => a - b);

  console.log('B', B);

  let opt1 = B[A.length - 1] * B[A.length - 2] * B[A.length - 3];
  let opt2 = B[0] * B[1] * B[2];
  let opt3 = B[A.length - 1] * B[0] * B[1];
  let opt4 = B[A.length - 1] * B[A.length - 2] * B[0];

  console.log('opt1:', opt1);
  console.log('opt2:', opt2);
  console.log('opt3:', opt3);
  console.log('opt4:', opt4);

  let max = Math.max(opt1, opt2, opt3, opt4);
  console.log('max:', max);
  return max;
  return <div>MaxProductOfThree</div>;
};

export default MaxProductOfThree;
