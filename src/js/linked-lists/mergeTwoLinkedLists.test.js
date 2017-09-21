/**
Note: Your solution should have O(l1.length + l2.length) time complexity,
since this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to
merge them. In other words, return a singly linked list, also sorted in
non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
Input/Output

[time limit] 4000ms (js)
[input] linkedlist.integer l1

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 104,
-109 ≤ element value ≤ 109.

[input] linkedlist.integer l2

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 104,
-109 ≤ element value ≤ 109.

[output] linkedlist.integer

A list that contains elements from both l1 and l2, sorted in non-decreasing order.
*/

const {
  ListNode,
  mergeTwoLinkedLists
} = require('./mergeTwoLinkedLists');

describe('mergeTwoLinkedLists()', () => {
  it('should merge two linked lists', () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(3);

    const l2 = new ListNode(4);
    l2.next = new ListNode(5);
    l2.next.next = new ListNode(6);

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    expected.next.next.next = new ListNode(4);
    expected.next.next.next.next = new ListNode(5);
    expected.next.next.next.next.next = new ListNode(6);

    const result = mergeTwoLinkedLists(l1, l2);
    expect(result).toEqual(expected);
  });

  it('should merge two linked lists', () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(1);
    l1.next.next = new ListNode(2);
    l1.next.next.next = new ListNode(4);

    const l2 = new ListNode(0);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(5);

    const expected = new ListNode(0);
    expected.next = new ListNode(1);
    expected.next.next = new ListNode(1);
    expected.next.next.next = new ListNode(2);
    expected.next.next.next.next = new ListNode(3);
    expected.next.next.next.next.next = new ListNode(4);
    expected.next.next.next.next.next.next = new ListNode(5);

    const result = mergeTwoLinkedLists(l1, l2);
    expect(result).toEqual(expected);
  });

  it('should merge two linked lists', () => {
    const l1 = null;

    const l2 = new ListNode(0);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(5);

    const expected = new ListNode(0);
    expected.next = new ListNode(3);
    expected.next.next = new ListNode(5);

    const result = mergeTwoLinkedLists(l1, l2);
    expect(result).toEqual(expected);
  });
});
