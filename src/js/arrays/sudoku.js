const sudoku = grid => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let num = grid[row][col];
      if (num !== '.') {
        // check row
        for (let i = 0; i < 9; i++) {
          if (i !== col && grid[row][i] === num) return false;
        }

        // check column
        for (let i = 0; i < 9; i++) {
          if (i !== row && grid[i][col] === num) return false;
        }

        // check block
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            let blockRow = 3 * Math.floor(row / 3) + i;
            let blockCol = 3 * Math.floor(col / 3) + j;
            if (
              blockRow !== row &&
              blockCol !== col &&
              grid[blockRow][blockCol] === num
            )
              return false;
          }
        }
      }
    }
  }

  return true;
};

module.exports = {
  sudoku
};
