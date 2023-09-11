/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i=0,j=0;
    while(j<haystack.length){
        j=i;
        let s="";
        while(s.length<needle.length){
            s+=haystack[j];
            j++;
        }
        if(s==needle){
            return i;
        }
        i++;
    }
    return -1;
};