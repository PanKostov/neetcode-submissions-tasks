class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasOcurred = {}
    hasDuplicate(nums) {
        for(const n of nums) {
            if(!this.hasOcurred[n]) {
                this.hasOcurred[n] = true
            } else {
                return true
            }
        }

        return false
    }
}
