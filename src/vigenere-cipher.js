const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (flag) {
    this.flag = flag;

  }

  encrypt(message, key) {
    // if ( message === undefined || key === undefined) return 'THROWN';
    let lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = [];
    let keyRepeat;
  
    let onlyLetterMessageArr = message.toUpperCase().match(/[A-Z]/g);
  
    if ( message.length > key.length ) {
      keyRepeat = key.repeat(Math.ceil(message.length / key.length));
    } else {
      keyRepeat = key
    }
  
    let keyRepeatArr = keyRepeat.split('');
  
    for ( let i = 0; i < onlyLetterMessageArr.length; i++) {
  
      let letterVigner = lang.indexOf(onlyLetterMessageArr[i].toUpperCase()) + lang.indexOf(keyRepeatArr[i].toUpperCase());
      if ( letterVigner >= lang.length) {
        result.push(lang[letterVigner - 26])
      } else {
        result.push(lang[letterVigner]);        
      }
    }
  
    for ( let i = 0; i < message.length; i++) {
      if (!!message[i].match(/[\W\d]/g)) {
        result.splice(i, 0, message[i])
      }
    }
    if (this.flag || this.flag === undefined) {
      return result.join('')
    } else {
      return result.reverse().join('')
    }
  
  }    
  decrypt(message, key) {
    // if ( message === undefined || key === undefined) return 'THROWN';
    let lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = [];
    let keyRepeat;
  
    let onlyLetterMessageArr = message.toUpperCase().match(/[A-Z]/g);
  
    if ( message.length > key.length ) {
      keyRepeat = key.repeat(Math.ceil(message.length / key.length));
    } else {
      keyRepeat = key
    }
  
    let keyRepeatArr = keyRepeat.split('');
  
    for ( let i = 0; i < onlyLetterMessageArr.length; i++) {
  
      let letterVigner = lang.indexOf(onlyLetterMessageArr[i].toUpperCase()) - lang.indexOf(keyRepeatArr[i].toUpperCase());
      if ( letterVigner < 0) {
        result.push(lang[letterVigner + 26])
      } else {
        result.push(lang[letterVigner]);        
      }
    }
  
    for ( let i = 0; i < message.length; i++) {
      if (!!message[i].match(/\W/g)) {
        result.splice(i, 0, message[i])
      }
      console.log()
    }
    if (this.flag || this.flag === undefined) {
      return result.join('')
    } else {
      return result.reverse().join('')
    }
  }
}

module.exports = VigenereCipheringMachine;
