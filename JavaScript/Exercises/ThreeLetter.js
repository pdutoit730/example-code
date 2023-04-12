import React from 'react';

const ThreeLetter = () => {
  // THREELETTERS

  let A = 1;
  let B = 4;
  let C = A + B;

  let string = new Array(A + B).fill(0);

  console.log(string, 'A:', A, 'B:', B);

  for (let i = 0; i < C; i++) {
    console.log('i:', i);
    if (A >= B) {
      if (string[i - 1] === 'a' && string[i - 2] === 'a') {
        string[i] = 'b';
        B--;
        console.log(string, 'A:', A, 'B:', B);
      } else {
        string[i] = 'a';
        A--;
        console.log(string, 'A:', A, 'B:', B);
      }
    } else if (B >= A) {
      if (string[i - 1] === 'b' && string[i - 2] === 'b') {
        string[i] = 'a';
        A--;
        console.log(string, 'A:', A, 'B:', B);
      } else {
        string[i] = 'b';
        B--;
        console.log(string, 'A:', A, 'B:', B);
      }
    }
  }

  let s = string.join('');

  console.log(s);
  return <div>ThreeLetter</div>;
};

export default ThreeLetter;
