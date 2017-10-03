// Definition for binary tree:
function TreeNode(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

const kthLargestInBST = (t, k) => {
  let count = 0;
  let stack = [];
  let cur = t;

  // Iterative inorder traversal
  while (cur || stack.length !== 0) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      if (++count === k) return cur.value;
      cur = cur.right;
    }
  }
};

module.exports = {
  TreeNode,
  kthLargestInBST
};
