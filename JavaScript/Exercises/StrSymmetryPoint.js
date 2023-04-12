import React from 'react';

const StrSymmetryPoint = () => {
  // STRSYMMETRYPOINT

  let S = 'abba';

  if (S.length === 1) {
    return 0;
  }

  let length = Math.ceil(S.length / 2);
  console.log(length);

  for (let i = 0; i < length; i++) {
    if (S[i] === S[S.length - i - 1]) {
      console.log('i:', i, S[i], S[S.length - i - 1], 'YES');
    } else {
      console.log('i:', i, S[i], S[S.length - i - 1], 'NO');
      return -1;
    }
  }

  return length - 1;
  return <div>StrSymmetryPoint</div>;
};

export default StrSymmetryPoint;
