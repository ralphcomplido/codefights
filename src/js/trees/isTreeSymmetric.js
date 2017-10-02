// Definition for binary tree:
function TreeNode(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

const isTreeSymmetric = t => {
  if (t === null) return true;
  return compare(t.left, t.right);
};

const compare = (l, r) => {
  if (l === null && r === null) return true;
  if (l === null || r === null) return false;

  return (
    l.value === r.value && compare(l.left, r.right) && compare(l.right, r.left)
  );
};

module.exports = {
  TreeNode,
  isTreeSymmetric
};
