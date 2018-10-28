sumOfOthers = function(array) {
    let result = new Array(array.length).fill(0);
    for(let i = 0, len = array.length; i < len; i++) {
        let temp = array.slice(0, array.length);
            temp.splice(i, 1);
        let res = 0;
        temp.forEach(function(item) {
            res += item;
        });
        result[i] = res;
    }
    return result;
}