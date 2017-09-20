/**
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
Input/Output

[time limit] 4000ms (js)
[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 105,
-1000 ≤ element value ≤ 1000.

[input] integer k

An integer.

Guaranteed constraints:
-1000 ≤ k ≤ 1000.

[output] linkedlist.integer

Return l with all the values equal to k removed.
*/

const {
  ListNode,
  removeKFromList
} = require('./removeKFromList');

describe('removeKFromList()', () => {
  it('should remove all the target elements', () => {
    const l = new ListNode(1);
    l.next = new ListNode(2);
    l.next.next = new ListNode(6);
    l.next.next.next = new ListNode(3);
    l.next.next.next.next = new ListNode(4);
    l.next.next.next.next.next = new ListNode(5);
    l.next.next.next.next.next.next = new ListNode(6);

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    expected.next.next.next = new ListNode(4);
    expected.next.next.next.next = new ListNode(5);

    const result = removeKFromList(l, 6);
    expect(result).toEqual(expected);
  });

  it('should not remove any elements', () => {
    const l = new ListNode(1);
    l.next = new ListNode(2);
    l.next.next = new ListNode(3);

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);

    const result = removeKFromList(l, 6);
    expect(result).toEqual(expected);
  });

  it('should remove the only element', () => {
    const l = new ListNode(1);

    const result = removeKFromList(l, 1);
    expect(result).toEqual(null);
  });

  it('should return null', () => {
    const result = removeKFromList(null, 1);
    expect(result).toEqual(null);
  });
});
