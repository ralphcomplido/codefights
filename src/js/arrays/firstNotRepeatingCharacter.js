/* O(n) time, O(1) space */
const firstNotRepeatingCharacter = s => {
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (s.indexOf(c) === s.lastIndexOf(c)) return c;
  }

  return '_';
};

/* O(n) time, O(n) space */
const firstNotRepeatingCharacterUsingMap = s => {
  const counts = new Map();

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    let count = counts.get(c) || 0;
    counts.set(c, count + 1);
  }

  for (let [key, value] of counts) {
    if (value === 1) return key;
  }

  return '_';
};

module.exports = {
  firstNotRepeatingCharacter,
  firstNotRepeatingCharacterUsingMap
};
