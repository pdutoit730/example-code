import React from 'react';

const MaxSlice = () => {
  //MAXSLICEPROBLEM
  //
  let A = [3, 2, -6, 10, 0];
  let B = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      let arr = A.slice(i, j + 1);
      let sum = arr.reduce((prev, cur) => prev + cur);
      B.push(sum);
      console.log('i:', i, 'j:', j, 'arr:', arr);
    }
  }

  let max = Math.max(...B);

  console.log(max);
  return <div>MaxSlice</div>;
};

export default MaxSlice;
