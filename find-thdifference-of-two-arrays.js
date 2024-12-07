// https://leetcode.com/problems/find-the-difference-of-two-arrays


// solution #1 using hashmap
const findMap = (nums) => {
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, (map.get(num) || 0) + 1)
        } else {
            map.set(num, 1)
        }
    }
    return map
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let uniq1 = []
    let map1 = findMap(nums1)
    let map2 = findMap(nums2)
    for (const key of map1.keys()) {
        if (!map2.has(key)) {
            uniq1.push(key)
        } else {
            map2.delete(key)
        }
    }
    return [uniq1, [...map2.keys()]]
};


// solution #2 using set
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    nums2.forEach((num) => set1.delete(num))
    let set2 = new Set(nums2)
    nums1.forEach((num) => set2.delete(num))
    return [[...set1], [...set2]]
};
