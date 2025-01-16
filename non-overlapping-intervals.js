// https://leetcode.com/problems/non-overlapping-intervals

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let res = 0
    intervals.sort((a, b) => a[1] - b[1])
    let start = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        if (start > intervals[i][0]) {
            res++
        } else {
            start = intervals[i][1]
        }
    }
    return res
};
