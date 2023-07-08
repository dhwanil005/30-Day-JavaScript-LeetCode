/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let arr = this;
    const groupedArr = {};

    for(a of arr) {
        let key = fn(a);
        if(key in groupedArr) {
            groupedArr[key].push(a);
        }else {
            groupedArr[key] = [a];
        }
    }
    return groupedArr;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */