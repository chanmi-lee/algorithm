// https://leetcode.com/problems/jump-game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= max) {
            max = i
        }
    }
    return max === 0
};
