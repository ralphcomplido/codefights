function areFollowingPatterns(strings, patterns) {
  const strMap = new Map();
  const patMap = new Map();

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    let pat = patterns[i];

    if (!strMap.has(str) && !patMap.has(pat)) {
      strMap.set(str, pat);
      patMap.set(pat, str);
    } else {
      if (strMap.get(str) !== pat || patMap.get(pat) !== str) return false;
    }
  }

  return true;
}

module.exports = {
  areFollowingPatterns
};
