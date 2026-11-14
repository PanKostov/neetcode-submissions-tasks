class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let n = 0
        let i = 0
        while(i < nums.length) {
            if(nums[i] != val) {
                nums[n++] = nums[i]
            }
            i++;
        }

        return n
    }
}
