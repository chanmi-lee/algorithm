// https://leetcode.com/problems/find-the-highest-altitude

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prev = 0
    let max = 0
    for (const point of gain) {
        let current = point + prev
        prev = current
        if (max < current) {
            max = current
        }
    }
    return max
};
