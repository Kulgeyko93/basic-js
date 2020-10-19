const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {
  if (typeof sampleActivity !== `string`) return false;
  if (!parseFloat(sampleActivity)) return false;
  if (sampleActivity === undefined ) return false;
  if (+sampleActivity > 15 || +sampleActivity <= 0) return false;
  let t12 = 0.693/HALF_LIFE_PERIOD;
  let T = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(t12))
  return Number(T)
};
