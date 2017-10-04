const amendTheSentence = s => {
  // Match with each capital letter and prepend with a space
  // /g to do a global match and not stop after first match
  let res = s.replace(/[A-Z]/g, char => ' ' + char);
  return res.toLowerCase().trim();
};

module.exports = {
  amendTheSentence
};
