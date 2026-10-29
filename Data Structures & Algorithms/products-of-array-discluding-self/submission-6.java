class Solution {
    public int[] productExceptSelf(int[] nums) {
        int numsLength = nums.length;
        int[] prefixArr = new int[numsLength];
        int[] sufixArr = new int[numsLength];
        int[] outPutArr = new int[numsLength];

        int prefixSumMul = 1;
        prefixArr[0] = prefixSumMul;
        for(int i = 1; i < numsLength; i++) {
            prefixSumMul = prefixSumMul * nums[i-1];
            prefixArr[i] = prefixSumMul;
        }

        int sufixSumMul = 1;
        sufixArr[nums.length-1] = sufixSumMul;
        
        for(int i = numsLength-2; i >= 0; i--) {
            sufixSumMul = sufixSumMul * nums[i+1];
            sufixArr[i] = sufixSumMul;
        }

        for(int i = 0; i < prefixArr.length; i++) {
            outPutArr[i] = prefixArr[i] * sufixArr[i];
        }
       
        return outPutArr;
    }

}  
