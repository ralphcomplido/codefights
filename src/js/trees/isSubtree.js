// Definition for binary tree:
function TreeNode(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

const isSubtree = (t1, t2) => {
  if (t2 === null) return true;
  if (t1 === null) return false;

  return (
    isSameTree(t1, t2) || isSubtree(t1.left, t2) || isSubtree(t1.right, t2)
  );
};

const isSameTree = (t1, t2) => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return (
    t1.value === t2.value &&
    isSameTree(t1.left, t2.left) &&
    isSameTree(t1.right, t2.right)
  );
};

module.exports = {
  TreeNode,
  isSubtree
};
