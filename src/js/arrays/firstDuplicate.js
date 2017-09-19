/* O(n) time, O(1) space
Mark seen by making it negative
*/
function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    let num = Math.abs(a[i]);
    let index = num - 1;

    if (a[index] < 0) return num;
    a[index] = -a[index];
  }
  return -1;
}

/* O(n) time, O(n) space */
function firstDuplicateUsingSet(a) {
  const set = new Set();

  for (let i = 0; i < a.length; i++) {
    if (set.has(a[i])) return a[i];
    set.add(a[i]);
  }

  return -1;
}


module.exports = {
  firstDuplicate,
  firstDuplicateUsingSet
};
