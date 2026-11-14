/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let low = 1
        let high = n

        while(true) {
            let middleNumber= Math.floor((low+high)/2)
            let response = guess(middleNumber)

             if(response < 0) {
                high = middleNumber - 1
            }

            else if(response > 0) {
                low = middleNumber + 1
            }

             else {
                return middleNumber
             }
        }
    }

   
}
