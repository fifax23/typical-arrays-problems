exports.min = function min(array) {
    let result = 0;
    if (array && array.length > 0) {
        result = Math.min(...array);
    }
    return result;
};

exports.max = function max(array) {
    let result = 0;
    if (array && array.length > 0) {
        result = Math.max(...array);
    }
    return result;
};

exports.avg = function avg(array) {
    let result = 0;
    if (array && array.length > 0) {
        result = array.reduce((prev, curr) => prev + curr) / array.length;
    }
    return result;
};
