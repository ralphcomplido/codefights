const sumOfTwo = (a, b, v) => {
  let set = new Set();
  for (let i = 0; i < a.length; i++) {
    set.add(a[i]);
  }

  for (let i = 0; i < b.length; i++) {
    if (set.has(v - b[i])) return true;
  }

  return false;
};

module.exports = {
  sumOfTwo
};
