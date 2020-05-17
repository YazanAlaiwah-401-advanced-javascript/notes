const minimist = require('minimist');
function Input() {
  const argv = minimist(process.argv.slice(2));
  if(!(argv.a||argv.add)){
      throw 'invalid key'
  }
  this.add = (argv.add||argv.a);
  if(this.add === true){
      throw 'invalid input'
  }
  return {
      action: 'add',
      payload: this.add
  }
}

module.exports = Input;


