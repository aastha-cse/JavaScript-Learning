/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var s='';
    let carry=0;
    if(a.length<b.length){
        while(a.length!=b.length){
            a='0'+a;
        }
    }
    if(b.length<a.length){
        while(a.length!=b.length){
            b='0'+b;
        }
    }
    
    let i=a.length-1;
    while(i>=0){
        if(a[i]=='1' && b[i]=='1'){
             if(carry==0){
                 s='0'+s;
                carry=1;
             }
             else if(carry==1){
                 s='1'+s;
                carry=1;
             }
        }
        else if(a[i]=='0' && b[i]=='1' || a[i]=='1' && b[i]=='0'){
            if(carry==0){
                 s='1'+s;
                carry=0;
             }
             else if(carry==1){
                 s='0'+s;
                carry=1;
             }
        }
        else if(a[i]=='0' && b[i]=='0'){
            if(carry==0){
                 s='0'+s;
             }
             else if(carry==1){
                 s='1'+s;
                carry=0;
             }
        }
        console.log(s,"    ",carry);
        i--;
    }
    if(carry==1){
        s='1'+s;
    }
    return s;
};