import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupAnagrams {
    public static void main(String[] args) {
        GroupAnagrams ga = new GroupAnagrams();
        List<String> arr = Arrays.asList("eat","tea","tan","ate","nat","bat");
        
        System.out.println(ga.groupAnagrams(arr.toArray(new String[1])));

        System.out.println(ga.funWithAnagrams(Arrays.asList("framer", "frame", "code", "doce", "ecod")));
        
    }
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> mapAnagrams = new HashMap<String,List<String>>();
        for(int i = 0; i < strs.length; i++) {
            char[] tempArray = strs[i].toCharArray();
            Arrays.sort(tempArray); 
            String keyStr = new String(tempArray);
            if(mapAnagrams.keySet().contains(keyStr)){
                List<String> newList = mapAnagrams.get(keyStr);
                newList.add(strs[i]);
                mapAnagrams.put(keyStr, newList );
            }else {
                List<String> strList = new ArrayList<>();
                strList.add(strs[i]);
                mapAnagrams.put(new String(tempArray), strList);           
            }
        }
        return new ArrayList<>(mapAnagrams.values());
    } 
    public List<String> funWithAnagrams(List<String> text) {
        // Write your code here
            List<String> returnValue = new ArrayList<String>();
            Map<String, String> anagrams = new HashMap<String, String>();
            for(int index=0; index < text.size(); index++) {
                char[] txtArray = text.get(index).toCharArray();
                Arrays.sort(txtArray);
                String temp = new String(txtArray);
                System.out.println(temp);
                if(!anagrams.keySet().contains(temp)){
                    anagrams.put(temp, text.get(index));
                    returnValue.add(text.get(index));
                }
            }
            Collections.sort(returnValue);
            return returnValue;
        }
}
