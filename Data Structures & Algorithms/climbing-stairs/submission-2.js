class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
       let prevNum = 1
       let prevPrevNum = 0 
       let num = 0
       let counter = 0
       while(counter < n) {
        num = prevNum + prevPrevNum
        prevPrevNum = prevNum
        prevNum = num
        counter++
       }

    return num
    }
}
