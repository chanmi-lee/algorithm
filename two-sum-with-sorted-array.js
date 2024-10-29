// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // edge case
    if (numbers.length < 2) return false
    if (numbers[0] + numbers[1] > target) return false

    let left = 0
    let right = numbers.length - 1;

    while (left < right) {
        let total = numbers[left] + numbers[right]
        if (total === target) {
            return [left+1, right+1]
        } else if (total > target) {
            right--;
        } else {
            left++;
        }
    }
};
