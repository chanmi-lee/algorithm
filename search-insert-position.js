// https://leetcode.com/problems/search-insert-position

// #1 solution
// Time Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            return result
        } else if (nums[i] === target) {
            return i
        } else { // nums[i] < target
            result++
        }
    }
    return result
};


// #2 Solution
// Time Complexity: O(logN)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start+end)/2)
        if (nums[mid] > target) {
            end = mid-1
        } else if (nums[mid] === target) {
            return mid
        } else { // nums[mid] < target
            start = mid+1
        }
    }
    return start
};
