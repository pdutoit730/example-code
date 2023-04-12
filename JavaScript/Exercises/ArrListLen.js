import React from 'react';

const ArrListLen = () => {
  // ARRLISTLEN
  let A = [1, 4, -1, 3, 2];
  let list = [];
  console.log(list);
  let i = 0;
  let x = 0;

  while (x !== -1) {
    if (x === -1) {
      console.log('STOP');
    }

    x = A[i];
    i = x;

    list.push(x);

    console.log('list:', list);
    console.log('i:', i);
    console.log('x:', x);
  }

  return list.length;
  return <div>ArrListLen</div>;
};

export default ArrListLen;
