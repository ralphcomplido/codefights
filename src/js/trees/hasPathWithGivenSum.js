// Definition for binary tree:
function TreeNode(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

const hasPathWithGivenSum = (t, s) => {
  if (t === null) return s === 0;
  return hasPathSum(t, s);
};

const hasPathSum = (t, s) => {
  if (t === null) return false;

  // leaf node
  if (t.left === null && t.right === null) {
    return t.value === s;
  }

  let dif = s - t.value;
  return hasPathSum(t.left, dif) || hasPathSum(t.right, dif);
};

module.exports = {
  TreeNode,
  hasPathWithGivenSum
};
