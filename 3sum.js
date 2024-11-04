// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = []
    if (nums.length < 3) return ans

    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length - 2; i++) {
        // check if the current element is a duplicate of the previous element (skip it)
        if (i > 0 && nums[i] === nums[i-1]) continue
        
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k]
            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                // total is equal to 0
                ans.push([nums[i], nums[j], nums[k]])
                j++

                // if the num[j] is equal to previous element (duplicated), skip it
                while (nums[j] === nums[j-1] && j < k) {
                    j++
                }
            }
        }
    }
    return ans
};
