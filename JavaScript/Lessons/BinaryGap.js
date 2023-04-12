import React from 'react';

const BinaryGap = () => {
  // BINARY GAP PROBLEM

  const num = 1041;
  let maxGap = 0;
  let curGap = 0;

  const bin = num.toString(2);

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      if (curGap > maxGap) {
        maxGap = curGap;
      }
      curGap = 0;
    } else if (bin[i] === '0') {
      curGap++;
    }
  }
  return maxGap;
  console.log(bin);
  console.log(maxGap);

  return <div>BinaryGap</div>;
};

export default BinaryGap;
