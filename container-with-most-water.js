// https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let max = 0
    
    while (left < right) {
        prev = Math.min(height[right], height[left]) * (right - left)
        max = Math.max(max, prev)
        if (height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};
