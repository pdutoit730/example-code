import React from 'react';

const MinAvgTwoSlice = () => {
  //MIN AVG TWO SLICE

  let A = [4, 2, 2, 5, 1, 5, 8];

  let min = null;
  let index = null;

  if (A.length < 2 || A.length > 100000) {
    return;
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let curArr = A.slice(i, j + 1);
      let curMin =
        curArr.reduce((prevVal, curVal) => prevVal + curVal) / curArr.length;

      if (min === null) {
        min = curMin;
        index = i;
      } else if (curMin < min) {
        min = curMin;
        index = i;
      } else {
        min = min;
      }
    }
  }

  return index;
  return <div>MinAvgTwoSlice</div>;
};

export default MinAvgTwoSlice;
