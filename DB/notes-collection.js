const NoteModel = require('./notes-schema.js');

class Note {
  constructor() { }
  async create(obj) {
    let add = new NoteModel({ text: obj.payload, category: obj.category });
    let save = await add.save();
    console.log(save);
    return save;
  }

  async delete(obj) {
    let remove = await NoteModel.findByIdAndRemove(obj.id);
    return remove;
  }

  async get(obj) {
    let list;
    if (obj.category === true) {
      list = await NoteModel.find({});
    } else {
      list = await NoteModel.find({ category: obj.category });
    }
    return list;
  }
  async updata(obj) {
    let updata = await NoteModel.findByIdAndUpdate(
      { _id: obj.id },
      { text: obj.note },
      { new: true },
    );
    return updata;
  }
}

module.exports.Note = new Note();
