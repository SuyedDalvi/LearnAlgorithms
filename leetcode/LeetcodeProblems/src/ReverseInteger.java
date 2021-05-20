
public class ReverseInteger {

    public static void main(String[] args) {
        // int x = 10;
        // System.out.println(Integer.SIZE);
        // System.out.println(new DecimalFormat("#0.00").format(Math.pow(-2, 31)));
        // int minVal = (int) Math.pow(-2, 31);
        // int maxVal = (int) Math.pow(2,31) - 1;

        // System.out.println(12/10);
        // x = -x;
        // System.out.println(x);
        ReverseInteger ri = new ReverseInteger();
        // System.out.println(ri.reverse(1234));
        // System.out.println(ri.reverse(-1234));
        // System.out.println("Reverse of " + Math.pow(2, 31) + ": " + ri.reverseNum((int)Math.pow(2, 31)));
        System.out.println(ri.reverseNum(123));
    }

    public double reverseNum(int x) {
        double revNum = 0.0;
        double rem = 0.0;
        while(x != 0) {
            rem = x % 10;
            revNum = revNum * 10 + rem;
            x = x/10;
        }
        // revNum = revNum + x;
        
// System.out.println(new DecimalFormat("#0.00").format(revNum));

// System.out.println(revNum == Math.max(revNum, Integer.MAX_VALUE));
//         if(temp > 0 && revNum == Math.max(revNum, Integer.MAX_VALUE)) {
//             revNum = 0;
//         }

        // if(temp < 0 && (-x == Math.min(-x, Math.pow(-2, 31)))) {
        //     revNum = 0;
        // } else if(temp < 0) {
        //     revNum = -revNum;
        // }

        // if(temp < 0) {
        //     revNum = -revNum;
        //     if(revNum == Math.min(revNum, Integer.MIN_VALUE)){
        //         revNum = 0;
        //     }
        // }

        return revNum;
    }

}

// x = 123
// 123 % 10 = 3 , x = x/10 =12     => 3
// 12 % 10 = 2, x = x/10           => 32
// 1 % 10 = 1                      => 321


//  x = 5874
/**
 * rem = 5873 % 10 = 4
 * revNum = 4
 * x = 587 
 */
