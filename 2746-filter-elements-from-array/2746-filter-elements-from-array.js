/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = new Array();

    for(let i=0;i<=arr.length-1;i++) {
        if( fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;    
};