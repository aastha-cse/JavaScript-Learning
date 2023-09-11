/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=[];
    for(let i=0;i<s.length;i++)
    {
        flag=false;
        if(s[i]=='(' || s[i]=='{' || s[i]=='[' ) arr.push(s[i]);
        else{
            if(arr.length<1) return false;
            let bracket=arr.pop();
            if((bracket=='(' && s[i]!=')') || (bracket=='[' && s[i]!=']') ||           (bracket=='{' && s[i]!='}')) return false;
        }
    }
    return arr.length>0 ? false : true;
};