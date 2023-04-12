import React from 'react';

const DivCount = () => {
  //DIVCOUNT

  const a = 6;
  const b = 12;
  const k = 2;
  let count = 0;

  for (let i = a; i <= b; i++) {
    if (i % k === 0) {
      count++;
    }
  }
  console.log('solutionCount:', count);
  return <div>DivCount</div>;
};

export default DivCount;
