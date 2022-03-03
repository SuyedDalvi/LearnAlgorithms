public class App {
    public static void main(String[] args) throws Exception {
        // RomanToInt romanToint = new RomanToInt();
        // System.out.println(romanToint.romanToInt("MCMXCIV"));
        // App.printReverse("str".toCharArray());

        System.out.println(Student.count);

        System.out.println(new Student().name + " " + Student.count);
    }

    // private static void printReverse(char [] str) {
    //     helper(0, str);
    //   }
      
    //   private static void helper(int index, char [] str) {
    //     if (str == null || index >= str.length) {
    //         System.out.println(index);
    //       return;
    //     }
    //     helper(index + 1, str);
    //     System.out.print(str[index]);
    //   }
}
