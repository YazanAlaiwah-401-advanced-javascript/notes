const colors = require('colors');
const { v4: uuidv4 } = require('uuid');
const note1 = require('../DB/notes-schema.js')

class Notes {
  constructor() {
    this.id = 0;
  }
  execute(obj) {
    console.log(obj)
    if (!obj) {
      return;
    }
    if (obj.action === 'add') {
    return  this.add(obj);
    }else if(obj.action === 'delete'){
      return this.delete(obj)
    }else if(obj.action === 'list'){
      return this.list(obj)
    }else if(obj.action === 'help'){
      return this.help()
    }
  }
 async add(obj) {
    let test = new note1({text:obj.payload,category:obj.category})
    let resulte = await test.save()
     console.log(resulte)
    return resulte
  }
  async delete(obj){
   let d =  await note1.findByIdAndRemove(obj.id)
   console.log(d)
  }
  async list(obj){
    let list;
    if(obj.category === true){
       list= await note1.find({})
    }else{
      list = await note1.find({category:obj.category})
    }
    console.log(list,'sdfdsfdsfds'.red)
  }
  help(){
    console.log(`
      -a or --add -> to add notes
      -c or --category -> to specific a category to save the note on it or its will be in general
      -l or --list -> to show the data you can ask for a specific
      -d or --delete -> to delete a note and add the id for the note
      `)
      return {}
  }
}

module.exports = Notes;
