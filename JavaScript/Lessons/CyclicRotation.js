import React from 'react';

const CyclicRotation = () => {
  //
  const solution = (a, k) => {
    //
    const newArray = new Array(a.length);
    const concatArr = a.concat(a);

    if (k > a.length) {
      k = k % a.length;
    }

    for (let i = 0; i < a.length; i++) {
      newArray[i] = concatArr[a.length + i - k];
    }
    console.log('OldArray: ' + a);
    console.log('NewArray: ' + newArray);
    return newArray;
  };

  solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);

  return <div>CyclicRotation</div>;
};

export default CyclicRotation;
