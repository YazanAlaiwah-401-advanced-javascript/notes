require('dotenv').config();
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



let input = new Input();
let notes = new Notes();
notes.execute(input)
.then(mongoose.disconnect)

