class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxConsecutiveOnes = 0
        let currentConsecutiveOnes = 0

        for(const n of nums) {
            if(n === 1) {
                currentConsecutiveOnes++
            } else {
                if(currentConsecutiveOnes > maxConsecutiveOnes) {
                    maxConsecutiveOnes = currentConsecutiveOnes
                }
                currentConsecutiveOnes = 0
            }
        }

         if(currentConsecutiveOnes > maxConsecutiveOnes) {
            maxConsecutiveOnes = currentConsecutiveOnes
            currentConsecutiveOnes = 0
         }  

        return maxConsecutiveOnes;

    }
}
