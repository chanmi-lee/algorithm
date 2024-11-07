// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans = []
    intervals.sort((a, b) => a[0] - b[0])

    if (intervals.length === 1) return intervals
    let prev = intervals[0]
    
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        if (interval[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], interval[1])
        } else {
            ans.push(prev)
            prev = interval
        }
    }
    ans.push(prev)
    return ans
};
