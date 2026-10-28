class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
       HashMap<String, List<String>> map = new HashMap<>();
       
       for(int i = 0; i < strs.length; i++) {
            String sortedCurrentValue = strs[i].chars()
                        .sorted()
                        .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                        .toString();
            List<String> mapValue = map.get(sortedCurrentValue);
            if(mapValue != null) {
                mapValue.add(strs[i]);
                 map.put(sortedCurrentValue, mapValue);     
            }    else {
                List<String> newList = new ArrayList<>();
                newList.add(strs[i]);
                map.put(sortedCurrentValue, newList);
            }
           
       }
        
          List<List<String>> allValues = new ArrayList<>(map.values());
          return allValues;
    }

}
