/**
Given an array of integers, write a function that determines whether the array
contains any duplicates. Your function should return true if any element appears
at least twice in the array, and it should return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be
containsDuplicates(a) = true.

There are two 1s in the given array.

For a = [3, 1], the output should be
containsDuplicates(a) = false.

The given array contains no duplicates.

Input/Output

[time limit] 4000ms (js)
[input] array.integer a

Guaranteed constraints:
0 ≤ a.length ≤ 105,
-2 · 109 ≤ a[i] ≤ 2 · 109.

[output] boolean
*/

const {
  containsDuplicates
} = require('./containsDuplicates');

describe('containsDuplicates()', () => {
  it('should not contain duplicates', () => {
    const a = [3, 1];

    const result = containsDuplicates(a);
    expect(result).toBe(false);
  });

  it('should contain duplicates', () => {
    const a = [1, 2, 3, 1];

    const result = containsDuplicates(a);
    expect(result).toBe(true);
  });
});
