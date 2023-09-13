/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    let b="";
    for(let i=0;i<s.length;i++)
    {
        if((s[i]>='a' && s[i]<='z') || (s[i]>='0' && s[i]<='9')) b+=s[i];
    }
    s=b.split("");
    s=s.reverse();
    s=s.join("");
    return b==s;
};