const findProfession = (level, pos) => {
  if (level === 1) return 'Engineer';

  let parent = findProfession(level - 1, Math.ceil(pos / 2));

  // if pos is odd, then we are the same profession as the parent
  // else we are the opposite of the parent
  if (pos % 2 === 1) return parent;
  return parent === 'Engineer' ? 'Doctor' : 'Engineer';
};

module.exports = {
  findProfession
};
