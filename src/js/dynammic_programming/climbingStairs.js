const climbingStairs = n => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

module.exports = {
  climbingStairs
};
