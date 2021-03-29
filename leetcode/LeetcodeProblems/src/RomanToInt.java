import java.util.HashMap;
import java.util.Map;

public class RomanToInt {
    public Map<String, Integer> romanSet = new HashMap<>();
    public RomanToInt() {
        // I, V, X, L, C, D and M
        this.romanSet.put("I", 1);
        this.romanSet.put("V", 5);
        this.romanSet.put("X", 10);
        this.romanSet.put("L", 50);
        this.romanSet.put("C", 100);
        this.romanSet.put("D", 500);
        this.romanSet.put("M", 1000);
        this.romanSet.put("IV", 4);
        this.romanSet.put("IX", 9);
        this.romanSet.put("XL", 40);
        this.romanSet.put("XC", 90);
        this.romanSet.put("CD", 400);
        this.romanSet.put("CM", 900);
    }
    public int romanToInt(String romanString) {
        int integerEquivalent = 0;
       
        System.out.println(this.romanSet.keySet());
        for (int i=0; i < romanString.toCharArray().length; i++) {
            System.out.println(romanString.charAt(i));
            // System.out.println(this.romanSet.get(String.valueOf(romanString.charAt(i))));
            if(i+1<romanString.length() && this.romanSet.containsKey(String.valueOf(romanString.charAt(i)) + String.valueOf(romanString.charAt(i+1)))) {
                integerEquivalent += this.romanSet.get(String.valueOf(romanString.charAt(i)) + String.valueOf(romanString.charAt(i+1)));
                i++;
                continue;
            }
            integerEquivalent += this.romanSet.get(String.valueOf(romanString.charAt(i)));

        }
        return integerEquivalent;
    }
}
