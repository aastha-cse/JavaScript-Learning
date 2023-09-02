/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    const ans=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j]==target)
            {
                ans.push(i);
                ans.push(j);
                return ans;
            }
        }
    }
    return ans;
};