/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let a=s.split('');
    for(let i=0;i<a.length;i+=(2*k)){
        let l=i;
        let r=l+k-1;
        r=r<a.length ? r : a.length-1;

        while(l<r){
            [a[l],a[r]]=[a[r],a[l]];
            l++;
            r--;
        }
    }
    return a.join('');
};