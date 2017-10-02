const decodeString = s => {
  let res = '';
  let numStack = [];
  let resStack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (isNumber(c)) {
      let n = 0;
      while (isNumber(s.charAt(i))) {
        n = n * 10 + parseInt(s.charAt(i));
        i++;
      }

      numStack.push(n);
      resStack.push(res);
      res = '';
    } else if (c === ']') {
      let n = numStack.pop();
      res = resStack.pop() + res.repeat(n);
    } else {
      res += c;
    }
  }

  return res;
};

const isNumber = c => {
  return !isNaN(c);
};

module.exports = {
  decodeString
};
