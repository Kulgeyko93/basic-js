const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  getLength() {
    
  },
  addLink(value) {
    let chainValue = value;
    if (value === undefined) {chainValue= ' '};
      this.chain += `~( ${String(chainValue)} )~`;
    return this
  },
  removeLink(position) {
    if ( typeof position !== 'number' || position < 0 || position > this.chain.match(/\~\( [^\~]+ \)\~/g).length) return error('THROWN')
    let chainPositionArr = this.chain.match(/\~\( [^\~]+ \)\~/g);
    chainPositionArr.splice(position-1,1);
    this.chain = chainPositionArr.join('')
    return this
  },
  reverseChain() {
    if (this.chain === '') return this;
    this.chain = this.chain.match(/\~\( [^\~]+ \)\~/g).reverse().join('')
    return this
  },
  finishChain() {
    let result = this.chain.slice(1, -1);
    this.chain = ''
    return result;
  }
};


module.exports = chainMaker;
