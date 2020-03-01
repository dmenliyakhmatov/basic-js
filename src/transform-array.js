module.exports = function transform(arr) {
    if (!Array.isArray(arr)) { throw new Error('It is not array')};
    let transArray = [];
    arr.forEach((item, index) => {
        if (arr[index - 1] ==='--discard-next' || item===undefined) return;
        switch(item) {
            case '--discard-next':
                break;
            case '--discard-prev':
                if (index != 0) transArray.pop();
                break;
            case '--double-next':
                if (index != arr.length-1) transArray.push(arr[index+1]);
                break;
            case '--double-prev':
                if (index != 0) transArray.push(arr[index-1]);
                break;
            default:
                transArray.push(item);
                break;
        }
    });
    return transArray;
};
