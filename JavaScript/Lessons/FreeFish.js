import React from 'react';

// find fish swimming to the right a.k.a the index of the '1' in array b.
// check the sizes of the fish on the right of that fish, a.k.a.:
// iterate over the value of each element to the right in array a to determine if the next fish is smaller/bigger
// remove the fish from the stream (array) if the "right swimming" fish is bigger
// if the "right swimming" fish is smaller that the fish it encounters the iteration stops
// the number of "fish" (elements) in the "stream" (array a) is the return value

const FreeFish = () => {
  //
  // let A = [6, 3, 2, 4, 5];
  // let B = [1, 1, 1, 1, 0];

  const solution = (A, B) => {
    let stack = [];
    let survivors = 5;
    for (let i = 0; i < A.length; i++) {
      if (B[i] === 1) {
        stack.push(A[i]);
        // survivors++;
        console.log('INDEX:', i);
        console.log('survivors:', survivors);
        console.log('stack:', stack);
      } else if (B[i] === 0) {
        if (stack.length === 0) {
          // survivors++;
          console.log('INDEX:', i);
          console.log('survivors:', survivors);
          console.log('stack:', stack);
        } else if (stack.length !== 0) {
          if (stack[stack.length - 1] > A[i]) {
            survivors--;
            console.log('INDEX:', i);
            console.log('survivors:', survivors);
            console.log('stack:', stack);
          } else if (stack[stack.length - 1] < A[i]) {
            while (stack[stack.length - 1] < A[i]) {
              stack.pop();
              survivors--;
            }
          }
        }
      }
    }
    return survivors;
  };

  return <div>FreeFish</div>;
};

export default FreeFish;
