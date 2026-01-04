// https://leetcode.com/problems/longest-consecutive-sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // remove duplicated elements by converting array to set
    let set = new Set(nums)

    let result = 0
    for (const num of set) {
        if (!set.has(num-1)) {
            let length = 1
            while (set.has(num + length)) {
                length++
            }
            result = Math.max(length, result)
        }
    }
    return result
};
