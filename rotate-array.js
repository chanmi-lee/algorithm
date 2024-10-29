// https://leetcode.com/problems/rotate-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    const rotated = new Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
        rotated[(i+k) % nums.length] = nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i]
    }
};
