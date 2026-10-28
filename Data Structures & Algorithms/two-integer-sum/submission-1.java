class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> numsMap = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            int resultNumber = target - nums[i]; // 10 - 4 = 6
        
            Integer mapResult = numsMap.get(nums[i]); //  
            if(mapResult != null) {
                return new int[]{mapResult, i};
            }

            else {
                numsMap.put(resultNumber, i);
            }

        }

        return new int[]{0,1};
    }
}
