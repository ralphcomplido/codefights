/**
Given two binary trees t1 and t2, determine whether the second tree is a subtree
of the first tree. A subtree for vertex v in a binary tree t is a tree consisting
of v and all its descendants in t. Determine whether or not there is a vertex v
(possibly none) in tree t1 such that a subtree for vertex v (possibly empty)
in t1 equals t2.

Example

The output should be isSubtree(t1, t2) = true.

This is what these trees look like:

      t1:             t2:
       5              10
      / \            /  \
    10   7          4    6
   /  \            / \    \
  4    6          1   2   -1
 / \    \
1   2   -1
As you can see, t2 is a subtree of t1 (the vertex in t1 with value 10).

The output should be isSubtree(t1, t2) = false.

This is what these trees look like:

        t1:            t2:
         5             10
       /   \          /  \
     10     7        4    6
   /    \           / \    \
  4     6          1   2   -1
 / \   /
1   2 -1
As you can see, there is no vertex v such that the subtree of t1 for vertex v
equals t2.

Input/Output

[time limit] 4000ms (js)
[input] tree.integer t1

A binary tree of integers.

Guaranteed constraints:
0 ≤ tree size ≤ 6 · 104,
-1000 ≤ node value ≤ 1000.

[input] tree.integer t2

Another binary tree of integers.

Guaranteed constraints:
0 ≤ tree size ≤ 6 · 104,
-1000 ≤ node value ≤ 1000.

[output] boolean

Return true if t2 is a subtree of t1, otherwise return false.
*/

const { TreeNode, isSubtree } = require('./isSubtree');

describe('isSubtree()', () => {
  it('should have the subtree', () => {
    const t1 = new TreeNode(5);
    t1.left = new TreeNode(10);
    t1.right = new TreeNode(7);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(6);
    t1.left.left.left = new TreeNode(1);
    t1.left.left.right = new TreeNode(2);
    t1.left.right.right = new TreeNode(-1);

    const t2 = new TreeNode(10);
    t2.left = new TreeNode(4);
    t2.right = new TreeNode(6);
    t2.left.left = new TreeNode(1);
    t2.left.right = new TreeNode(2);
    t2.right.right = new TreeNode(-1);

    const result = isSubtree(t1, t2);
    expect(result).toBe(true);
  });

  it('should have the subtree', () => {
    const t1 = new TreeNode(10);
    t1.left = new TreeNode(10);
    t1.right = new TreeNode(7);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(6);
    t1.left.left.left = new TreeNode(1);
    t1.left.left.right = new TreeNode(2);
    t1.left.right.right = new TreeNode(-1);

    const t2 = new TreeNode(10);
    t2.left = new TreeNode(4);
    t2.right = new TreeNode(6);
    t2.left.left = new TreeNode(1);
    t2.left.right = new TreeNode(2);
    t2.right.right = new TreeNode(-1);

    const result = isSubtree(t1, t2);
    expect(result).toBe(true);
  });

  it('should not have the subtree', () => {
    const t1 = new TreeNode(5);
    t1.left = new TreeNode(10);
    t1.right = new TreeNode(7);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(6);
    t1.left.left.left = new TreeNode(1);
    t1.left.left.right = new TreeNode(2);
    t1.left.right.left = new TreeNode(-1);

    const t2 = new TreeNode(10);
    t2.left = new TreeNode(4);
    t2.right = new TreeNode(6);
    t2.left.left = new TreeNode(1);
    t2.left.right = new TreeNode(2);
    t2.right.right = new TreeNode(-1);

    const result = isSubtree(t1, t2);
    expect(result).toBe(false);
  });
});
