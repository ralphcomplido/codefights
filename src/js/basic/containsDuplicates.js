function containsDuplicates(a) {
  let set = new Set();

  for (let i = 0; i < a.length; i++) {
    if (set.has(a[i])) return true;
    set.add(a[i]);
  }

  return false;
}

module.exports = {
  containsDuplicates
};
