const containsCloseNums = (nums, k) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (map.has(n) && i - map.get(n) <= k) return true;
    map.set(n, i);
  }

  return false;
};

module.exports = {
  containsCloseNums
};
