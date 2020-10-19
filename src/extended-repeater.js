const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let result = [String(str)];
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  if (options.addition === null) {
    options.addition= 'null'
  }
  for ( let i = 1; i <= repeatTimes; i++) {

    for ( let j = 1; j <= additionRepeatTimes; j++) {
      
      result.push(options.addition);

      
      if ( j< additionRepeatTimes) {
        result.push(options.additionSeparator ||'|');
      }
      // Значение `separator` по умолчанию это `'+'`. Значение `additionSeparator` по умолчанию это `'|'`.
    }

    if ( i< repeatTimes) {
 
      result.push((options.separator) || '+');
      result.push(String(str));
    }
  }

  return result.join('')

};
