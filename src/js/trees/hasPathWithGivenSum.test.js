/**
Given a binary tree t and an integer s, determine whether there is a root to
leaf path in t such that the sum of vertex values equals s.

Example

This is what this tree looks like:

      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -2 -3
Path 4 -> 3 -> 2 -> -2 gives us 7, the required sum.

This is what this tree looks like:

      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -4 -3
There is no path from root to leaf with the given sum 7.

Input/Output

[time limit] 4000ms (js)
[input] tree.integer t

A binary tree of integers.

Guaranteed constraints:
0 ≤ tree size ≤ 5 · 104,
-1000 ≤ node value ≤ 1000.

[input] integer s

An integer.

Guaranteed constraints:
-4000 ≤ s ≤ 4000.

[output] boolean

Return true if there is a path from root to leaf in t such that the sum of node
values in it is equal to s, otherwise return false.
*/

const { TreeNode, hasPathWithGivenSum } = require('./hasPathWithGivenSum');

describe('hasPathWithGivenSum()', () => {
  it('should have a path with the sum', () => {
    const tree = null;
    const sum = 0;

    const result = hasPathWithGivenSum(tree, sum);
    expect(result).toBe(true);
  });

  it('should have a path with the sum', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(2);
    const sum = 3;

    const result = hasPathWithGivenSum(tree, sum);
    expect(result).toBe(true);
  });

  it('should have a path with the sum', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
    tree.left.left = new TreeNode(4);
    tree.right.right = new TreeNode(5);
    const sum = 9;

    const result = hasPathWithGivenSum(tree, sum);
    expect(result).toBe(true);
  });

  it('should not have a path with the sum', () => {
    const tree = new TreeNode(8);
    tree.right = new TreeNode(2);
    const sum = 8;

    const result = hasPathWithGivenSum(tree, sum);
    expect(result).toBe(false);
  });
});
