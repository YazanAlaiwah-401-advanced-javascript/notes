/* eslint-disable no-unused-vars */
const colors = require('colors');
const minimist = require('minimist');
class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    this.delete = argv.delete || argv.d;
    this.add = argv.add || argv.a;
    this.list = argv.list || argv.l;
    this.category = argv.category || argv.c;
    this.help = argv.help || argv.h;
    this.updata = argv.u || argv.updata;
    this._ = argv._;   
  }
  vaild(){
    if (
      !(
        this.delete ||
        this.add ||
        this.list ||
        this.category ||
        this.help ||
        this.updata
      )
    ) {
      console.log(
        '   ' + 'invalid kay \n if you need help type --help or -h'.red,
      );
      return { action: 'error' };
    } else if (this.add && this.category) {
      if (this.add === true || this.category === true) {
        console.log(
          '   ' + 'ERROR: missing a notes or list'.underline.red,
        );
        return {};
      } else {
        return {
          action: 'add',
          payload: this.add,
          category: this.category,
        };
      }
    } else if (this.add) {
      if(this._){
        console.log(`invalid input if you need help pleas type --help or -h`.red);
        return {};
      }
      if (this.add === true) {
        console.log('   ' + 'ERROR: missing a notes'.underline.red);
        return {};
      } else {
        return {
          action: 'add',
          payload: this.add,
          category: 'general',
        };
      }
    } else if (this.list) {
      return {
        action: 'list',
        category: this.list,
      };
    } else if (this.delete) {
      if (this.delete === true) {
        console.log('   ' + 'ERROR: missing a id'.underline.red);
        return {action:'error'};
      } else {
        return {
          action: 'delete',
          id: this.delete,
        };
      }
    } else if (this.help) {
      return {
        action: 'help',
      };
    } else if (this.updata && this._) {
      console.log('hello world');
      return {
        action: 'updata',
        id: this.updata,
        note: this._[0],
      };
    }
  }
}

module.exports = Input;
