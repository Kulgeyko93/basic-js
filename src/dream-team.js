const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//member is array
if (!Array.isArray(members)) return false;
let result = []
for ( let i = 0; i < members.length; i++) {
  if ( typeof members[i] !== 'string') continue;

  result.push(members[i].trim()[0].toUpperCase());

};

return result.sort().join('')

};
