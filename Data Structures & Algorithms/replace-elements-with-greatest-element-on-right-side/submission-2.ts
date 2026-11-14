class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let n = arr.length
        let rightMax = -1
        let ans = new Array(n);

        for(let i = n-1; i >=0; i--) {
            ans[i] = rightMax
            rightMax = Math.max(rightMax, arr[i])
        }

        return ans
    }
}
