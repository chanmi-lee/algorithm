// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    // hold the products of elements before/after each index in the nums array
    let prefix = new Array(n).fill(1)
    let suffix = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i-1] * nums[i-1]
    }

    for (let i = n-2; i >= 0; i--) {
        suffix[i] = suffix[i+1] * nums[i+1]
    }

    let answer = []
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i]
    }

    return answer
};
