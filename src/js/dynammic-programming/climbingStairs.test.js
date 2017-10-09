/**
You are climbing a staircase that has n steps. You can take the steps either
1 or 2 at a time. Calculate how many distinct ways you can climb to the top of
the staircase.

Example

For n = 1, the output should be
climbingStairs(n) = 1;

For n = 2, the output should be
climbingStairs(n) = 2.

You can either climb 2 steps at once or climb 1 step two times.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 50.

[output] integer

It's guaranteed that the answer will fit in a 32-bit integer.
*/

const { climbingStairs } = require('./climbingStairs');

describe('climbingStairs()', () => {
  it('should return the number of ways to climb stairs', () => {
    const n = 1;

    const result = climbingStairs(n);
    expect(result).toBe(1);
  });

  it('should return the number of ways to climb stairs', () => {
    const n = 2;

    const result = climbingStairs(n);
    expect(result).toBe(2);
  });

  it('should return the number of ways to climb stairs', () => {
    const n = 26;

    const result = climbingStairs(n);
    expect(result).toBe(196418);
  });

  it('should return the number of ways to climb stairs', () => {
    const n = 38;

    const result = climbingStairs(n);
    expect(result).toBe(63245986);
  });
});
