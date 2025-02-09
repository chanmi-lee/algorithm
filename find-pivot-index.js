// https://leetcode.com/problems/find-pivot-index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0)
    let leftTotal = 0
    
    for (let i = 0; i < nums.length; i++) {
        let rightTotal = total - leftTotal - nums[i]

        // check if the rightTotal is equal to leftTotal
        // if they are equal, it means the current index i is the pivot index, and return i
        if (rightTotal === leftTotal) {
            return i
        }
        // update left total by adding the current element nums[i]
        leftTotal += nums[i]
    }
    // if there is no pivot index found, return -1
    return -1;
};
