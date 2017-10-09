const bubbleSort = items => {
  let len = items.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i; j < stop - 1; j++) {
      if (items[j] > items[j + 1]) {
        let temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }

  return items;
};

module.exports = {
  bubbleSort
};
