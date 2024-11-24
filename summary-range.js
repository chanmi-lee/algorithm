// https://leetcode.com/problems/summary-ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = []
    let start = nums[0]
    let cnt = 0
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] !== nums[i-1]+1) {
            result.push(cnt === 0 ? `${start}` : `${start}->${nums[i-1]}`)
            start = nums[i]
            cnt = 0
        } else {
            cnt++
        }
    }
    return result
};
