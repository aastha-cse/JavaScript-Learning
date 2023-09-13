/**
 * @param {string} s
 * @return {boolean}
 */
const ispali=(s,i,j) =>{
    while(i<j){
        if(s[i++]!=s[j--]) return false;
    }
    return true;
}

var validPalindrome = function(s) {
    let i=0,j=s.length-1;
    while(i<j){
        if(s[i]!=s[j]){
            if(ispali(s,i+1,j) || ispali(s,i,j-1)) return true;
            return false;
        }
        i++;
        j--;
    }
    return true;
}