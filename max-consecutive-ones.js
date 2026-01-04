// https://leetcode.com/problems/max-consecutive-ones/

/**
 * Time Complexity: ( O(n) ) — one pass through the array.
 * Space Complexity: ( O(1) ) — constant memory.
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let length = 0
    for (const num of nums) {
        if (num !== 0) {
            length++
            max = Math.max(max, length)
        } else { // num === 0
            length = 0
        }
    }
    return max
};
