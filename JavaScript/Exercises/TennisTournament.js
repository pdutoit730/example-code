import React from 'react';

const TennisTournament = () => {
  //TENNISTOURNAMENT

  let P = 2;
  let C = 4;

  let C1 = Math.floor(P / 2);
  let C2 = C;

  let ans = Math.min(C1, C2);

  return ans;
  return <div>TennisTournament</div>;
};

export default TennisTournament;
