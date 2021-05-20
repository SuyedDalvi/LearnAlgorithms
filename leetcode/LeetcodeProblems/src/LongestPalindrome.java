public class LongestPalindrome {
    public static void main(String[] args) {
        String s = "abbaebcd";
        LongestPalindrome lp = new LongestPalindrome();
        int maxLength = 0;
        String maxStr = "";
        for(int i = 0; i <= s.length() /2; i++){
            for(int j = i; j<s.length(); j++){
                String str = lp.longestPalindrome(s.substring(i, j));
                System.out.println(i + ' ' + j + ' ' + str);
                
                if(Math.max(maxLength, str.length()) != maxLength) {
                    maxLength = Math.max(maxLength, str.length());
                    maxStr = str;
                }
                
            }
            
        }
        System.out.println(maxLength + "  " + maxStr );
        // System.out.println(str);
    }

    public String longestPalindrome(String str) {
        String palindrome = "";

        if (str.length() == 1)
            palindrome = str;
        else if (str.length() == 2) {
            palindrome = str.charAt(0) == str.charAt(1) ? str : String.valueOf(str.charAt(0));
        } else if(str.length() % 2 != 0){
            // madam
            int midpoint = str.length() / 2;
            int i = 1;
            while(midpoint - i >= 0 && midpoint + i <= str.length()){
                if(LongestPalindrome.checkPalindrome(str.substring(midpoint-i, midpoint+i+1))){
                    palindrome = str.substring(midpoint-i, midpoint+i+1);
                }
                i++;  
            }
            
        } else {
            // abcddcba
            // abba
            int midpoint = str.length() / 2 ;
            int i = 1;
            while(midpoint - i >= 0 && midpoint + i <= str.length()){
                if(LongestPalindrome.checkPalindrome(str.substring(midpoint-i, midpoint+i))){
                    palindrome = str.substring(midpoint-i, midpoint+i);
                }
                i++;  
            }
        }


        // System.out.println(palindrome);
        return palindrome;
    }

    public static boolean checkPalindrome(String str) {
        boolean isPalindrome = true;
        for(int i = 0, j = str.length()-1; i < str.length() / 2 ; i++, j--) {
            if(str.charAt(i) != str.charAt(j)) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }
}

/**
 * midpoint = if(str.length() == 1 ) return str; else if(str.length() == 2) {
 * str.charAt(0) == str.charAt(1) ? palindrome = str : palindrome =
 * str.charAt(0) } else {
 * 
 * }
 *
 */