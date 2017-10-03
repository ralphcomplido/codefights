/**
Note: Your solution should have only one BST traversal and O(1) extra space
complexity, since this is what you will be asked to accomplish in an interview.

A tree is considered a binary search tree (BST) if for each of its nodes the
following is true:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and the right subtrees must also be binary search trees.
Given a binary search tree t, find the kth largest element in it.

Note that kth largest element means kth element in increasing order.
See examples for better understanding.

Example

For
k = 2, the output should be
kthLargestInBST(t, k) = 3.
Here is what t looks like:

   3
 /   \
1     5
     / \
    4   6
The values of t are [1, 3, 4, 5, 6], and the 2nd element when the values
are in sorted order is 3.

For
k = 1, the output should be
kthLargestInBST(t, k) = -2.

Here is what t looks like:

     1
    /
  -1
  / \
-2   0
The values of t are [-2, -1, 0, 1], and the 1st largest is -2.

Input/Output

[time limit] 4000ms (js)
[input] tree.integer t

A tree of integers. It is guaranteed that t is a BST.

Guaranteed constraints:
1 ≤ tree size ≤ 104,
-105 ≤ node value ≤ 105.

[input] integer k

An integer.

Guaranteed constraints:
1 ≤ k ≤ tree size.

[output] integer

The kth largest value in t.
*/

const { TreeNode, kthLargestInBST } = require('./kthLargestInBST');

describe('kthLargestInBST()', () => {
  it('should find the Kth element in the BST', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(1);
    root.right = new TreeNode(5);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(6);

    const result = kthLargestInBST(root, 2);
    expect(result).toBe(3);
  });

  it('should find the Kth element in the BST', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(-1);
    root.left.left = new TreeNode(-2);
    root.left.right = new TreeNode(0);

    const result = kthLargestInBST(root, 1);
    expect(result).toBe(-2);
  });

  it('should find the Kth element in the BST', () => {
    const root = new TreeNode(100);

    const result = kthLargestInBST(root, 1);
    expect(result).toBe(100);
  });
});
