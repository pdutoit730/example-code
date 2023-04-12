import React from 'react';

const TestQuestions = () => {
  // QUESTION 1: Given a string S, made up of the words 'plus' and 'minus', write an
  // algorithm that returns a string made up of the characters '+' and '-'.
  // Example: S = ‘plusminusplus' should return '+-+'.

  // SOLUTION:

  // let S = 'minusminus';
  // let A = [];

  // for (let i = 0; i < S.length; i++) {
  //   console.log(i);
  //   if (S[i] === 'm') {
  //     A.push('-');
  //     i = i + 4;
  //   }
  //   if (S[i] === 'p') {
  //     A.push('+');
  //     i = i + 3;
  //   }
  // }

  // console.log(A);

  // let ans = A.join('');
  // return ans;

  // END
  ////////////////////////////////////////////////////////////////////////////////////////////

  // QUESTION 2: Write an algorithm that sums all 2-digit numbers in the given array A.
  // Example: A = [ 1, 12, -6, 124, -13 ] should return -1, given that ' 12 + (-13) = -1.

  // SOLUTION:

  // let A = [-13, 1900, 1, 100, 45];

  // let B = [];

  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] > 9 && A[i] < 100) {
  //     B.push(A[i]);
  //   }

  //   if (A[i] < -9 && A[i] > -100) {
  //     B.push(A[i]);
  //   }
  // }

  // if (B.length === 0) {
  //   return 0;
  // }

  // console.log(B);

  // let ans = B.reduce((prev, cur) => prev + cur);
  // return ans;

  // END
  ////////////////////////////////////////////////////////////////////////////////////////////

  // QUESTION 3: Array A represents numbers placed in a circle. Count the number of pairs
  // next to one another where the sum of the pair is an even number.
  // Example 1: A = [ 6, 4, 2, 8, 3, 3 ], should return 2.
  // Example 2: A = [ 2, 3, 1, 3, 6 ], should return 2.
  // Example 3: A = [ 5, 5, 5 ], should return 1.

  // SOLUTION:

  // let A = [2, 1, 2, 2, 2];
  // let B = [A[0]];
  // let C = A.concat(B);
  // console.log('A:', A);
  // console.log('B:', B);
  // console.log('C:', C);
  // let count = 0;

  // if (A.length === 1) {
  //   return 0;
  // }

  // if (A.some((num) => num === 0)) {
  //   return 0;
  // }

  // if ((A[0] + A[1]) % 2 === 0) {
  //   console.log('YES');
  //   C.splice(C.length - 1, C.length);
  // }

  // console.log('C run:', C);

  // for (let i = 0; i < C.length; i++) {
  //   console.log('i:', i);
  //   if ((C[i] + C[i + 1]) % 2 === 0) {
  //     console.log(C[i], C[i + 1]);
  //     count++;
  //     i++;
  //   }
  // }

  // return count;

  // END
  ////////////////////////////////////////////////////////////////////////////////////////////

  return <div>TestQuestions</div>;
};

export default TestQuestions;
