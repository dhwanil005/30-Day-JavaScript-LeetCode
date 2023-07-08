/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let resArr = [], tempArr =[];

    for(let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]);

        if(tempArr.length == size) {
            resArr.push(tempArr);
            tempArr = [];
        }
    }
    if(tempArr.length) {
        resArr.push(tempArr);
    }

    return resArr;
};