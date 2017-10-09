/**
Given an array of integers, sort it.

Example

For items = [2, 4, 1, 5], the output should be
bubbleSort(items) = [1, 2, 4, 5].

Input/Output

[time limit] 4000ms (js)
[input] array.integer items

Guaranteed constraints:
1 ≤ items.length ≤ 15,
-100 ≤ items[i] ≤ 100.

[output] array.integer
*/

const { bubbleSort } = require('./bubbleSort');

describe('bubbleSort()', () => {
  it('should sort the array', () => {
    const items = [2, 4, 1, 5];
    const expected = [1, 2, 4, 5];

    const result = bubbleSort(items);
    expect(result).toEqual(expected);
  });

  it('should sort the array', () => {
    const items = [1, 1, 1, 1];
    const expected = [1, 1, 1, 1];

    const result = bubbleSort(items);
    expect(result).toEqual(expected);
  });

  it('should sort the array', () => {
    const items = [3, 6, 1, 5, 3, 6];
    const expected = [1, 3, 3, 5, 6, 6];

    const result = bubbleSort(items);
    expect(result).toEqual(expected);
  });

  it('should sort the array', () => {
    const items = [3];
    const expected = [3];

    const result = bubbleSort(items);
    expect(result).toEqual(expected);
  });
});
