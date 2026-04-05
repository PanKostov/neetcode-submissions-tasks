class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0
        const seenNumbers = new Map()
        const nums2 = []

        for(let i = 0; i < nums.length; i++) {
           
            if(!seenNumbers.get(nums[i])) {
                seenNumbers.set(nums[i], true)
                nums2.push(nums[i])
                k++
            }
        }

        console.log("nums ", nums2)
        for(let j = 0; j < nums2.length; j++) {
            nums[j] = nums2[j]
        }
        return k
        
    }
}
