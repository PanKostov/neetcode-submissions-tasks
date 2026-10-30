class Solution {
    public int[] productExceptSelf(int[] nums) {
        int numsLength = nums.length;
        int[] outPutArr = new int[numsLength];

        int prefixSumMul = 1;
        outPutArr[0] = prefixSumMul;
        int sufixSumMul = 1;
        outPutArr[nums.length-1] = sufixSumMul;

        for(int i = 1; i < numsLength; i++) {
            prefixSumMul = prefixSumMul * nums[i-1];
            outPutArr[i] = prefixSumMul;
        }

        
        for(int i = numsLength-2; i >= 0; i--) {
            sufixSumMul = sufixSumMul * nums[i+1];
            outPutArr[i] = outPutArr[i] * sufixSumMul;
        }

        
        return outPutArr;
    }

}  
