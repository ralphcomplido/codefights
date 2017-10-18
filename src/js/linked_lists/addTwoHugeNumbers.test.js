/**
You're given 2 huge integers represented by linked lists. Each linked list
element is a number from 0 to 9999 that represents a number with exactly 4
digits. The represented number might have leading zeros. Your task is to add up
these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.

Input/Output

[time limit] 4000ms (js)
[input] linkedlist.integer a

The first number, without its leading zeros.

Guaranteed constraints:
0 ≤ a size ≤ 104,
0 ≤ element value ≤ 9999.

[input] linkedlist.integer b

The second number, without its leading zeros.

Guaranteed constraints:
0 ≤ b size ≤ 104,
0 ≤ element value ≤ 9999.

[output] linkedlist.integer

The result of adding a and b together, returned without leading zeros in the
same format.
*/

const { ListNode, addTwoHugeNumbers } = require('./addTwoHugeNumbers');

describe('addTwoHugeNumbers()', () => {
  it('should add two huge numbers', () => {
    const a = new ListNode(9876);
    a.next = new ListNode(5432);
    a.next.next = new ListNode(1999);

    const b = new ListNode(1);
    b.next = new ListNode(8001);

    const expected = new ListNode(9876);
    expected.next = new ListNode(5434);
    expected.next.next = new ListNode(0);

    const result = addTwoHugeNumbers(a, b);
    expect(result).toEqual(expected);
  });

  it('should add two huge numbers', () => {
    const a = new ListNode(123);
    a.next = new ListNode(4);
    a.next.next = new ListNode(5);

    const b = new ListNode(100);
    b.next = new ListNode(100);
    b.next.next = new ListNode(100);

    const expected = new ListNode(223);
    expected.next = new ListNode(104);
    expected.next.next = new ListNode(105);

    const result = addTwoHugeNumbers(a, b);
    expect(result).toEqual(expected);
  });

  it('should add two huge numbers', () => {
    const a = new ListNode(9999);
    a.next = new ListNode(9999);

    const b = new ListNode(1);

    const expected = new ListNode(1);
    expected.next = new ListNode(0);
    expected.next.next = new ListNode(0);

    const result = addTwoHugeNumbers(a, b);
    expect(result).toEqual(expected);
  });
});
