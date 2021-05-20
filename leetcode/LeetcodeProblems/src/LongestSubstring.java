
// Given a string s, find the length of the longest substring without repeating characters.


public class LongestSubstring {
    public static void main(String[] args) {
        // String str = "avc";
        // int[] chars = new int[128];
        // for(int i=0; i< str.length(); i++) {
        //     chars[str.charAt(i)] = 1;
        //     System.out.println(chars.toString());
        // }
        LongestSubstring prob = new LongestSubstring();
        System.out.println(prob.lengthOfLongestSubstring(""));
    }
    public int lengthOfLongestSubstring(String s) {
        int maxLength = 0;
        int length = 0;
        if(s.length() > 0) {
            for(int i=0; i< s.length(); i++) {
                length = this.calculateLength(s.toCharArray(), i);
                maxLength = Math.max(length, maxLength);
            }
        }
        return maxLength;
    } 
    public int calculateLength(char[] str, int start) {
        int[] chars = new int[128];
        int len=0;
        for(int i = start; i < str.length; i++) {
            chars[str[i]] = chars[str[i]] + 1;
            if(chars[str[i]] > 1) {
                break;
            } else {
                len++;
            }
        }
        return len;
    }
}

/**
 * Rough Work
 * 
 * lngstSubstr = []
 * s = "abcacbcabb"
 * allSubstr = [abc, bca, ca, acb, cb, cab]
 * 
 * 
 * 
 * 
 */