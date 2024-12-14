// https://leetcode.com/problems/apply-operations-to-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] === nums[i]) {
            nums[i-1] *= 2
            nums[i] = 0
        }
    }
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
    return nums
};
