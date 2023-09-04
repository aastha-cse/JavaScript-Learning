/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0];
    let max=prices[0];
    let profit=max-min;
    for(let i=1;i<prices.length;i++)
    {
        if(prices[i]<min) {
            min=prices[i];
            max=prices[i];
        }
        else if(prices[i]>max) max=prices[i];
        profit=Math.max(profit,max-min);
    }
    return profit;
};