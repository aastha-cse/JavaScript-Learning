/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // nums.sort(function(a,b){return a-b;});
    // console.log(nums);
    let count=1,ans=nums[0];
    for(let i=1;i<nums.length;i++)
    {
        if(count==0){
            ans=nums[i];
            count=1;
        }
        else if(ans==nums[i]){
            count++;
        }
        else{
            count--;
        }
    }
    return ans;
};