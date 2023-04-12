import React from 'react';

const FrogJump = () => {
  // FROGJUMP

  let X = 10;
  let Y = 85;
  let D = 30;

  let jumps = Math.ceil((Y - X) / D);

  return jumps;

  console.log(jumps);

  return <div>FrogJump</div>;
};

export default FrogJump;
