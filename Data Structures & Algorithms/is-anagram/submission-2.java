class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) {
            return false;
        }
        String sortedS = s.chars()
                        .sorted()
                        .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                        .toString();;
        String sortedT = t.chars()
                        .sorted()
                        .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                        .toString();;

        for(int i = 0; i < s.length(); i++) {
            if(sortedS.charAt(i) != sortedT.charAt(i)) {
                return false;
            }
         
        }

        return true;
    }
}
