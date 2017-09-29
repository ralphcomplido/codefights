/**
Find the kth largest element in an unsorted array. This will be the kth largest
element in sorted order, not the kth distinct element.

Example

For nums = [7, 6, 5, 4, 3, 2, 1] and k = 2, the output should be
kthLargestElement(nums, k) = 6;
For nums = [99, 99] and k = 1, the output should be
kthLargestElement(nums, k) = 99.
Input/Output

[time limit] 4000ms (js)
[input] array.integer nums

Guaranteed constraints:
1 ≤ nums.length ≤ 105,
-105 ≤ nums[i] ≤ 105.

[input] integer k

Guaranteed constraints:
1 ≤ k ≤ nums.length.

[output] integer
*/

const { kthLargestElement } = require('./kthLargestElement');

describe('kthLargestElement()', () => {
  it('should grab the Kth largest element', () => {
    const nums = [7, 6, 5, 4, 3, 2, 1];
    const k = 2;

    const result = kthLargestElement(nums, k);
    expect(result).toBe(6);
  });

  it('should grab the Kth largest element', () => {
    const nums = [99, 99];
    const k = 1;

    const result = kthLargestElement(nums, k);
    expect(result).toBe(99);
  });

  it('should grab the Kth largest element', () => {
    const nums = [1];
    const k = 1;

    const result = kthLargestElement(nums, k);
    expect(result).toBe(1);
  });

  it('should grab the Kth largest element', () => {
    const nums = [-1, 2, 0];
    const k = 2;

    const result = kthLargestElement(nums, k);
    expect(result).toBe(0);
  });
});
