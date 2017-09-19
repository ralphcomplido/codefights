/* O(nm) time, O(1) space */
function rotateImage(a) {
  const n = a.length;

  for(let i = 0; i < n/2; i++){
    for(let j = i; j < n-i-1; j++){
      let temp = a[i][j];
      a[i][j] = a[n-j-1][i];
      a[n-j-1][i] = a[n-i-1][n-j-1];
      a[n-i-1][n-j-1] = a[j][n-i-1];
      a[j][n-i-1] = temp;
    }
  }

  return a;
}

/* O(nm) time, O(nm) space */
function rotateImage2(a) {
  let res = [];
  let n = a.length;

  for (let i = 0; i < n; i++) {
    res.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res[j][n-i-1] = a[i][j];
    }
  }

  return res;
}

module.exports = {
  rotateImage,
  rotateImage2
};
