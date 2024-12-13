// https://leetcode.com/problems/max-number-of-k-sum-pairs

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b)
    let result = 0
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let currSum = nums[left] + nums[right]
        if (currSum === k) {
            left++
            right--
            result++
        } else if (currSum < k) {
            left++
        } else {
            right--
        }
    }
    return result
};
