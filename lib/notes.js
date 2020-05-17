function notes() {
  this.id = 0;
}

notes.prototype.execute = function (obj) {
  if (obj.action === 'add') {
    this.add(obj.payload);
  }
};

notes.prototype.add = function (note) {
  let obj = {
    [this.id]: note,
  };
  console.log(`Adding Notes: ${obj[this.id]}`);
  this.id++;
};

module.exports = notes;
