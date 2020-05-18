const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('NOTE MODULE', () => {
  it('test', () => {
    const note = new Note();
    note.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('test1', () => {
    let obj = {
      action: 'add',
      payload: 'this the first test',
    };
    const note = new Note();
    note.execute(obj);

    expect(console.log).toHaveBeenCalled();
  });
});
