class Solution {
    public boolean isAnagram(String s, String t) {
        int sizeOfS = s.length();
        int sizeOfT = t.length();
        if(sizeOfS != sizeOfT) {
            return false;
        }

        HashMap<Character, Integer> mapS = new HashMap<>();
        HashMap<Character, Integer> mapT = new HashMap<>();

        for(int i = 0; i < sizeOfS; i++) {
            Integer mapSResult = mapS.get(s.charAt(i));
            Integer mapTResult = mapT.get(t.charAt(i));

            if(mapSResult == null) {
                mapS.put(s.charAt(i), 1);
            } else {
                mapS.put(s.charAt(i), ++mapSResult);
            }

            if(mapTResult == null) {
                mapT.put(t.charAt(i), 1);
            } else {
                mapT.put(t.charAt(i), ++mapTResult);
            }
        }

       return mapS.equals(mapT);
    }
}
