// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    for (const matrix of grid) {
        let start = 0
        let end = matrix.length - 1
        while (start <= end) {
            if (matrix[start] >= 0) {
                start++
            } else if (matrix[start] < 0) {
                count += end - start + 1
                break;
            }
        }
    }
    return count
};
