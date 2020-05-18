const colors = require('colors');
const { v4: uuidv4 } = require('uuid');
class Notes {
  constructor() {
    this.id = 0;
  }
  execute(obj) {
    if (!obj) {
      return;
    }
    if (obj.action === 'add') {
      this.add(obj);
    }
  }
  add(note) {
    this.id = uuidv4();
    let obj = {
      [this.id]: note.payload,
    };
    console.log(
      ` Adding Notes: ${obj[this.id]}`.green +
      ' ' +
      `with id of ${this.id}`.blue
    );
    // this.id++;
  }
}

module.exports = Notes;
