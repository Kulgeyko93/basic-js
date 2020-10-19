const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) return error('THROWN');
  let result = arr.slice(0,);

  while(true){
    switch ( true) {
      case (result.includes('--discard-next')):{
        if ( result.indexOf('--discard-next') !== -1) {
          if ( result[result.indexOf('--discard-next')+1] === undefined){
            result.splice(result.indexOf('--discard-next'),1)
          } else {
            result.splice(result.indexOf('--discard-next'),2)
          }
        }
        break
      }
      case (result.includes('--double-next')): {
        if ( result.indexOf('--double-next') !== -1) {
          if (result[result.indexOf('--double-next')+1]=== undefined) {
            result.splice(result.indexOf('--double-next'),1)
          } else {
            result.splice(result.indexOf('--double-next'),1 , result[result.indexOf('--double-next')+1])
          }
        }
        break
      }
      case (result.includes('--discard-prev')): {
        if ( result.indexOf('--discard-prev') !== -1) {
          if (result[result.indexOf('--discard-prev')-1] === undefined) {
            result.splice(result.indexOf('--discard-prev'),1)
          } else {
            result.splice(result.indexOf('--discard-prev') - 1,2)
          }
        }
        break
      }

      case (result.includes('--double-prev')):{
        if ( result.indexOf('--double-prev') !== -1) {
          if (result[result.indexOf('--double-prev')-1] === undefined ) {
            result.splice(result.indexOf('--double-prev'),1)
          } else {
            result.splice(result.indexOf('--double-prev'),1 , result[result.indexOf('--double-prev')-1])
          }
        }
        break
      }
      
  }

  if (result.includes('--discard-next') === false && result.includes('--discard-prev') === false 
      && result.includes('--double-next') === false && result.includes('--double-prev') === false) {
        break
 
      }
  };
  return result
};
