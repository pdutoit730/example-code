import React from 'react';

const CountDiv = () => {
  //COUNTDIV

  if (
    A > B ||
    K < 1 ||
    K > 2000000000 ||
    A < 0 ||
    B < 0 ||
    A > 2000000000 ||
    B > 2000000000
  ) {
    return;
  }

  while (A % K !== 0) {
    A++;
  }

  while (B % K !== 0) {
    B--;
  }

  let answer = (B - A) / K + 1;
  return answer;

  return <div>CountDiv</div>;
};

export default CountDiv;
