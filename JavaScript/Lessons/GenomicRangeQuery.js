import React from 'react';

const GenomicRangeQuery = () => {
  // GENOMIC RANGE QUERY

  //DNA sequence represented as string containing letters A, C, G, T
  // A = 1, C = 2, G = 3, T = 4

  //DNA sequence as S = [S[0], S[1], ... , S[N-1]]
  // There are M no. of queries in arrays P and Q, each consisting of M integers.
  // K-th query to find minimal impact factor of nucleotides contained in DNA sequence
  // between positions P[K] and Q[K] (inclusive).

  // A = 1,
  // C = 2,
  // G = 3,
  // T = 4

  let S = 'CAGCCTA';
  let P = [2, 5, 0];
  let Q = [4, 5, 6];

  let ret = [];

  let M = P.length;

  if (M > 50000) {
    return;
  }

  if (S.length > 100000) {
    return;
  }

  for (let i = 0; i < M; i++) {
    if (S.slice(P[i], Q[i] + 1).includes('A')) {
      ret[i] = 1;
    } else if (S.slice(P[i], Q[i] + 1).includes('C')) {
      ret[i] = 2;
    } else if (S.slice(P[i], Q[i] + 1).includes('G')) {
      ret[i] = 3;
    } else if (S.slice(P[i], Q[i] + 1).includes('T')) {
      ret[i] = 4;
    } else {
      return;
    }
  }

  return ret;
  return <div>GenomicRangeQuery</div>;
};

export default GenomicRangeQuery;
