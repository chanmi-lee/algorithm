// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) { // at least twice
            return true
        } else { // if it is first
            map.set(num, 1)
        }
    }
    return false
};
