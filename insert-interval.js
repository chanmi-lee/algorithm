// https://leetcode.com/problems/insert-interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // smaller than newInterval
    let left = []
    // greater than newInterval
    let right = []
    let [start, end] = newInterval
  
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i]
        // smaller than newInterval
        if (interval[1] < start) {
            left.push(interval)
        // greater than newInterval
        } else if (interval[0] > end) {
            right.push(interval)
        // overlapping with newInterval
        } else {
            start = Math.min(start, interval[0])
            end = Math.max(end, interval[1])
        } 
    }
    return [...left, [start, end], ...right]
};
