const Brackets = () => {
  //BRACKETS
  let S = '{[()()]}';
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(' || S[i] === '[' || S[i] === '{') {
      stack.push(S[i]);
    } else if (S[i] === ')') {
      if (stack.length === 0 || stack.pop() !== '(') return 0;
    } else if (S[i] === ']') {
      if (stack.length === 0 || stack.pop() !== '[') return 0;
    } else if (S[i] === '}') {
      if (stack.length === 0 || stack.pop() !== '{') return 0;
    }
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
};

export default Brackets;
