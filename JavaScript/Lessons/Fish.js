import React from 'react';

const Fish = () => {
  // FISH

  let A = [4, 3, 2, 1, 5];
  let B = [0, 1, 0, 0, 0];
  //       <, >, <, <, <

  if (A.length > 100000) {
    return;
  }

  let stack = [];
  let survivors = 0;

  for (let i = 0; i < A.length; i++) {
    console.log('stack:', stack);
    console.log('survivors:', survivors);
    console.log('i:', i);

    if (B[i] === 0) {
      if (stack.length === 0) {
        survivors++;
      }

      if (stack.length !== 0) {
        while (A[i] > stack[stack.length - 1]) {
          stack.pop();
        }

        if (stack.length === 0) {
          survivors++;
        }
      }
    }

    if (B[i] === 1) {
      stack.push(A[i]);
    }
  }

  survivors = survivors + stack.length;
  return survivors;
  return <div>Fish</div>;
};

export default Fish;
