class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
          let n = 0
        for(let i = 0; i < nums.length; i++) {
          
            if(nums[i] !== nums[i+1]) {
                nums[n++] = nums[i]
            }
        }

        return n
    }
}
