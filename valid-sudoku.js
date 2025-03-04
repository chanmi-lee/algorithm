// https://leetcode.com/problems/valid-sudoku
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // store data of each row, col, and box to check whether current number is duplicate or not
    let rows = Array.from({ length: 9 }, () => new Set())
    let cols = Array.from({ length: 9 }, () => new Set())
    let boxes = Array.from({ length: 9 }, () => new Set())

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                continue
            }
          
            let num = board[i][j]
            let boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3)

            // check if board[i][j], that is num, is already in the row or col or boxes
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIdx].has(num)) {
                return false
            }

            rows[i].add(num)
            cols[j].add(num)
            boxes[boxIdx].add(num)
        }
    }
    return true
};
