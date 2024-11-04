// https://leetcode.com/problems/maximum-product-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMax = nums[0]
    let prevMin = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {
        // the new maximum can have 3 conditions,
        // 1. number(+) * prevMax(+)
        // 2. number(+) itself
        // 3. number(-) * prevMin(-)
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin)
        let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax)
        // update prevMax/Min with curMax/Min
        prevMax = curMax
        prevMin = curMin
        
        result = Math.max(curMax, result)
    }
    return result
};
