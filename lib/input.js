const colors = require('colors');
const minimist = require('minimist');
class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    if (!(argv.a || argv.add)) {
      console.log('   ' + 'invalid kay'.underline.red);
      return {};
    }
    this.add = argv.add || argv.a;
    if (this.add === true) {
      console.log('   ' + 'ERROR: missing a notes'.underline.red);
      return {};
    }
    return {
      action: 'add',
      payload: this.add,
    };
  }
}

module.exports = Input;
