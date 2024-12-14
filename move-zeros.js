// https://leetcode.com/problems/move-zeroes

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // move all non zero numbers to left places
    // move non zero numbers to left position
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
};
