// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    // sort in ascending order
    nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    let count = 0
    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum < target) {
            count += right-left // any number smaller than nums[right] must also be small enough
            left++
        } else {
            right--
        }
    }
    return count
};
