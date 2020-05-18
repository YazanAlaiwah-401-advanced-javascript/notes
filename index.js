const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let input = new Input();
let notes = new Notes();
notes.execute(input);
