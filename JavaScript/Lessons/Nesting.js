import React from 'react';

const Nesting = () => {
  // NESTING
  let S = '()()';
  let stack = [];

  if (S[0] === ')') {
    return 0;
  }

  if (S.length % 2 !== 0) {
    return 0;
  }

  for (let i = 0; i < S.length; i++) {
    console.log('i:', i);

    if (S[i] === '(') {
      stack.push(S[i]);
      console.log(stack);
    }

    if (S[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
      console.log(stack);
    }
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
  return <div>Nesting</div>;
};

export default Nesting;
