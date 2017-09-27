/**
Given an array of integers nums and an integer k, determine whether there are
two distinct indices i and j in the array where nums[i] = nums[j] and the
absolute difference between i and j is less than or equal to k.

Example

For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
containsCloseNums(nums, k) = true.

There are two 2s in nums, and the absolute difference between their positions
is exactly 3.

For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be

containsCloseNums(nums, k) = false.

The absolute difference between the positions of the two 2s is 3, which is
more than k.

Input/Output

[time limit] 4000ms (js)
[input] array.integer nums

Guaranteed constraints:
0 ≤ nums.length ≤ 55000,
-231 - 1 ≤ nums[i] ≤ 231 - 1.

[input] integer k

Guaranteed constraints:
0 ≤ k ≤ 35000.

[output] boolean
*/

const { containsCloseNums } = require('./containsCloseNums');

describe('containsCloseNums()', () => {
  it('should have close nums', () => {
    const nums = [0, 1, 2, 3, 5, 2];
    const k = 3;

    const result = containsCloseNums(nums, k);
    expect(result).toBe(true);
  });

  it('should not have close nums', () => {
    const nums = [0, 1, 2, 3, 4, 5, 2];
    const k = 3;

    const result = containsCloseNums(nums, k);
    expect(result).toBe(false);
  });

  it('should not have close nums', () => {
    const nums = [0, 1, 2, 3, 5, 2];
    const k = 2;

    const result = containsCloseNums(nums, k);
    expect(result).toBe(false);
  });
});
