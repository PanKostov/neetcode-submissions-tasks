class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k  = nums.length
        for(let i = 0; i < k; i++) {
            if(nums[i] === val) {
                while(nums[i] === nums[k-1] && k -1 > i) {
                    k--
                    if(k === 0) {
                        return 0
                    }
                }
                nums[i] = nums[k-1]
                nums[k-1] = val
                k--
            }
                
        }


        return k
    }
}
