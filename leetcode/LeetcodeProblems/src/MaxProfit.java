
public class MaxProfit {

    public static void main(String[] args) {

        int maxProfit = MaxProfit.maxProfit(new int[] {7,1,5,3,6,4});
        System.out.println(maxProfit);
    }

    public static int maxProfit(int [] prices) {
        
        int i = 0;
        int valley = prices[0];
        int peak = prices[0];
        int maxprofit = 0;
        while (i < prices.length - 1) {
            while (i < prices.length - 1 && prices[i] >= prices[i + 1])
                i++;
            valley = prices[i];
            while (i < prices.length - 1 && prices[i] <= prices[i + 1])
                i++;
            peak = prices[i];
            maxprofit = Math.max(maxprofit, peak-valley);
        }
        return maxprofit;

    }

    

    

}