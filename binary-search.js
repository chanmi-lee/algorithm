// https://leetcode.com/problems/binary-search


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            return result
        } else if (nums[i] === target) {
            return i
        }
    }
    return result
};
