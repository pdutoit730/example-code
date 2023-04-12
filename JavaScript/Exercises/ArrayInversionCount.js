import React from 'react';

const ArrayInversionCount = () => {
  //ARRAYINVERSIONCOUNT

  let A = [-1, 6, 3, 4, 7, 4];
  let count = 0;

  if (A.length > 1000000000) {
    return -1;
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      if (A[i] > A[j]) {
        count++;
      }
    }
  }

  console.log(count);
  return <div>ArrayInversionCount</div>;
};

export default ArrayInversionCount;
