const sumInRange = (nums, queries) => {
  let modulo = 1e9 + 7;
  let sums = [];
  sums.push(0);

  for (let i = 0; i < nums.length; i++) {
    sums.push(sums[i] + nums[i]);
  }

  let sum = 0;
  for (let i = 0; i < queries.length; i++) {
    let lower = queries[i][0];
    let upper = queries[i][1];
    sum += sums[upper + 1] - sums[lower];
    sum %= modulo;
  }

  if (sum < 0) return sum + modulo;
  return sum;
};

module.exports = {
  sumInRange
};
