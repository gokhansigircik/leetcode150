// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock
//  and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
//  If you cannot achieve any profit, return 0.


// Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

Input: prices1 = [7,6,4,3,1]
Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// prices = 
// [7,1,5,3,6,4]
//     I     I
//     buy  sell

// buyDay=1
// buyPrice=prices[buyDay]=1

// sellDay=4
// sellPrice=prices[sellDay]=6

// buyDay<sellDay
// profit= sellPrice-buyPrice= 6-1=5
// one for loop so time complexity will be liner O(N)

var MaxProfit = function(prices){

  let minBuyPrice = prices[0] /* initialize minprice and initialized on day 1 '0' */
  let max= 0 /* keep track of max value */

  for(let i=1; i<prices.length; i++){   /*u cant sell before u buy so i starts from 1 */
    const sellPrice=prices[i]  /* define the sell price*/
    const profit= sellPrice-minBuyPrice /*best possible profit */
    max=Math.max(max, profit) /* if i encounter profit larger then my max value i will update my max value*/

    // when would be the best time to buy? given that we are to sell on dayi
    minBuyPrice=Math.min(minBuyPrice, prices[i])

  }
  return max
};

console.log(MaxProfit(prices))
console.log(MaxProfit(prices1));