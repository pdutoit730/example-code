import React from 'react';

const Distinct = () => {
  //DISTINCT
  A.sort((a, b) => a - b);

  let unique = [...new Set(A)];

  return unique.length;

  return <div>Distinct</div>;
};

export default Distinct;
