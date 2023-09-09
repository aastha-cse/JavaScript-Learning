/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry=1;
    for(let i=digits.length-1;i>=0;i--)
    {
        let n=digits[i]+carry;
        digits[i]=n%10;
        carry=Math.floor(n/10);
        if(carry==0) break;
    }
    if(carry==1) digits.unshift(carry);
    return digits;
};