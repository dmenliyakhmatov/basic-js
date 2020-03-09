module.exports = function repeater(str, options) {
    if (options.separator == undefined)  {options.separator = '+'}
    if (options.additionSeparator == undefined) {options.additionSeparator = '|'}
    if (options.repeatTimes == undefined) { options.repeatTimes = 1}
    if (options.additionRepeatTimes == undefined) {options.additionRepeatTimes = 1}
    if (options.addition === null) {options.addition = 'null'}

    let arrAddition = [];
    let arrOneRepeat = [String(str)];
    let arrResult = [];
    if (options.addition != null) {
        for (let i = 1; i <= options.additionRepeatTimes; i++ ) {
            arrAddition.push(String(options.addition))
        }
        arrOneRepeat.push(String(arrAddition.join(options.additionSeparator)));
    }
    for (let i = 1; i<= options.repeatTimes; i++) {
        arrResult.push(arrOneRepeat.join(''));
    }
    return arrResult.join(options.separator)
};
  