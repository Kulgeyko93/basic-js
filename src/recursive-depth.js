const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 0
    if (Array.isArray(arr)) {
      result += 1 + arr.reduce((a, b) => {
            return Math.max(a, this.calculateDepth(b));
             }, 0)
        } else { 
          result+= 0
        }
    return result
  }
};