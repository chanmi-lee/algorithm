// https://leetcode.com/problems/majority-element-ii

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, (map.get(num) || 0) + 1)
        } else {
            map.set(num, 1)
        }
    }
    let result = []
    const target = nums.length / 3
    for (let key of map.keys()) {
        if (map.get(key) > target) {
            result.push(key)
        }
    }
    return result
};
