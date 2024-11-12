// https://leetcode.com/problems/single-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map()
    let result = 0
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1
    }
    for (let num of nums) {
        if (map[num] === 1) return num
    }
    return result
};
