const containsCloseNums = (nums, k) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    // if the previous occurance of this number N is K or less spaces away
    if (map.has(n) && i - map.get(n) <= k) return true;
    map.set(n, i);
  }

  return false;
};

module.exports = {
  containsCloseNums
};
