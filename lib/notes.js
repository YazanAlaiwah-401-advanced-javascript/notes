/* eslint-disable no-unused-vars */
const colors = require('colors');
const { v4: uuidv4 } = require('uuid');
const note = require('../DB/notes-collection.js').Note;

class Notes {
  constructor() {}
  execute(obj) {
    if (!obj) {
      return;
    }
    if (obj.action === 'add') {
      return  this.add(obj);
    }else if(obj.action === 'delete'){
      return this.delete(obj);
    }else if(obj.action === 'list'){
      return this.list(obj);
    }else if(obj.action === 'help'){
      return this.help();
    }else if(obj.action ==='updata'){
      return this.updata(obj);
    }else{
      return [1,2,3];
    }
  }
  async add(obj) {
    let resulte = note.create(obj);
    console.log(resulte);
    return resulte;
  }
  async delete(obj){
    let remove = await note.delete(obj);
    console.log(remove);
    return remove;
  }
  async list(obj){
    let list = await note.get(obj);
    list.forEach(data=>{
      console.log(`
        Note: ${data.text}
        catogery: ${data.category} wiht ID: ${data._id}
      ------------------------------------------------------
      `);
    });
    return list;
  }
  async updata(obj){
    let updata = await note.updata(obj);
    console.log(updata);
  }

  help(){
    console.log(`
      -a or --add -> to add notes
      -c or --category -> to specific a category to save the note on it or its will be in general
      -l or --list -> to show the data you can ask for a specific
      -d or --delete -> to delete a note and add the id for the note
      -u or --updata -> to updata the note you need to have the id and the note ex. -u <id> <new note>
      `.white);
    return {};
  }
}

module.exports = Notes;
