// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let left = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (left === nums[j]) {
                return [i, j]
            }
        }
    }
};

// using HashMap
var twoSum = function(nums, target) {
    // keep key as index, value as left
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let left = target - nums[i]
        if (map.has(left)) {
            return [i, map.get(left)]
        }
        map.set(nums[i], i)
    }
};
