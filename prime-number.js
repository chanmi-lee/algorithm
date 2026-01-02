// https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // 0, 1 is not prime number
    if (n < 2) return 0;

    // assume that every number is prime number (0 <= i < n)
    const isPrime = new Array(n).fill(true)
    // remove 0, 1 because both are not prime number
    isPrime[0] = isPrime[1] = false

    // check i * i < n 
    for (let i = 2; i * i < n; i++) {
        // if the number can be divided into i, remove i
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false
        }
    }
    
    // count the number of true in isPrime
    return isPrime.filter(Boolean).length;
};
