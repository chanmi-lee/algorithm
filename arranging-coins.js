// https://leetcode.com/problems/arranging-coins


/**
 * Time complexity: O(logn)
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1
    let right = n
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        let stairs = (mid * (mid+1))/2 // (1+2+3...+n) = n(n+1)/2
        if (stairs === n) {
            return mid
        } else if (stairs > n) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    // return (left-1) because it means that the last stair is imcomplete
    return left - 1
};
