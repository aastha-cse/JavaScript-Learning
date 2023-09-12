/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    console.log(s.length);
    s=s.trim();
    console.log(s.length);
    var count=0;
    let i=s.length-1;
    while(s[i]!=' ' && i>=0){
        count++;
        i--;
    }
    return count;
};