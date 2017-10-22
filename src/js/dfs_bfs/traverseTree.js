function TreeNode(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

const traverseTree = t => {
  if (t === null) return [];

  let res = [];
  let queue = [];
  queue.push(t);

  while (queue.length > 0) {
    let n = queue.shift();
    res.push(n.value);

    if (n.left) queue.push(n.left);
    if (n.right) queue.push(n.right);
  }

  return res;
};

module.exports = {
  TreeNode,
  traverseTree
};
