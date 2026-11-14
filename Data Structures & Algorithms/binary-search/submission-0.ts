class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let low = 0
        let high = nums.length - 1

        while(low<= high) {
            let middleIndex = Math.floor((low+high)/2)

      
            if(target < nums[middleIndex]) {
                high = middleIndex - 1
            }

            else if(target > nums[middleIndex]) {
                low = middleIndex + 1
            }

             else {
                return middleIndex
             }
        }

        return -1
    }
}
