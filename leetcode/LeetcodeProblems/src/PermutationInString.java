class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if(s1.length() > s2.length()) {
            return false;
        }
        return checkPermutation(s1, s2);
         
    }
    
    public boolean checkPermutation(String s1, String s2) {
        
        // frequenies of characters in s1 equals that of s2
        
        int[] s1map = new int[26];
        
        boolean isPermutation = false;
        
        for(char c: s1.toCharArray()){
            s1map[c-'a'] += 1;
        }
        
        for(int i=0; i <= s2.length() - s1.length(); i++ ) {
            int[] s2map = new int[26]; // create all combinations
            
            for(int j=0; j< s1.length(); j++) {
                s2map[s2.charAt(i+j) - 'a']++;
            }
            
            // check whether the combination matches the s1
            
            if(matches(s1map, s2map)){
                isPermutation = true;
                break;
            }
            
        }
        
        return isPermutation;
    }
    
    public boolean matches(int[] map1, int[] map2) {
        
        for(int i=0;i<26;i++){
            if(map1[i] != map2[i]){
                return false;
            }
        }
        return true;
    }
        
}