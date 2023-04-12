import React from 'react';

const MaxNonOverlappingSegments = () => {
  //MAXNONOVERLAPPINGSEGMENTS
  let A = [1, 3, 7, 9, 9];
  let B = [5, 6, 8, 9, 10];

  if (A.length < 1) {
    return 0;
  }

  let end = B[0];
  let count = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] > end) {
      count++;
      end = B[i];
    }
  }

  console.log(count);
  return <div>MaxNonOverlappingSegments</div>;
};

export default MaxNonOverlappingSegments;
