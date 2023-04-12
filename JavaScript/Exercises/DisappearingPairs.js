import React from 'react';

const DisappearingPairs = () => {
  //DISAPPEARINGPAIRS

  let S = 'ACCBBAAC';

  let stack = [S[0]];

  for (let i = 1; i < S.length; i++) {
    console.log('i:', i);
    if (S[i] === stack[stack.length - 1]) {
      stack.pop();
      console.log(stack);
    } else {
      stack.push(S[i]);
      console.log(stack);
    }
  }

  console.log('stack:', stack);

  let ans = stack.join('');
  console.log(ans);
  return <div>DisappearingPairs</div>;
};

export default DisappearingPairs;
