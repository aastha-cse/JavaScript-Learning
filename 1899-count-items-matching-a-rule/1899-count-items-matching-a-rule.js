/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, k, v) {
    let count=0;
    for(let i=0;i<items.length;i++)
    {
        if(k=="type"){
            if(items[i][0]==v) count++;
        }
        else if(k=="color"){
            if(items[i][1]==v) count++;
        }
        if(k=="name"){
            if(items[i][2]==v) count++;
        }
    }
    return count;
};