'use strict';
require('@code-fellows/supergoose');
const Input = require('../../lib/input.js');
const Notes = require('../../lib/notes.js');
const minimist = require('minimist');
jest.mock('minimist');

describe('MODULE SCHEMA',()=>{
  minimist.mockImplementationOnce(() => ({
    add: 'this is my first test',
  }));
  it('its should for create it should pass if its just an add command',()=>{
    let input = new Input();
    let note = new Notes();
    return note.execute(input.vaild()).then(data=>{
      return expect(data).toMatchObject({
        text:'this is my first test',
        category:'general',
      });
    });
  });
  minimist.mockImplementationOnce(() => ({
    add: 'this is my first test',
    category:'school',
  }));
  it('its should pass for create with category with command',()=>{
    let input = new Input();
    let note = new Notes();
    return  note.execute(input.vaild()).then(data=>{
      return expect(data).toMatchObject({
        text:'this is my first test',
        category:'school',
      });
    });
  });
 
  minimist.mockImplementationOnce(() => ({
    l: true,
  }));
  it('its should show all the list when you type -l in the command',()=>{
    let input = new Input();
    let note = new Notes();
    return note.execute(input.vaild()).then(data=>{
      expect(data[0]).toMatchObject({
        text:'this is my first test',
        category:'general',
      });
      expect(data[1]).toMatchObject({
        text:'this is my first test',
        category:'school',
      });
    });
  });
  
  minimist.mockImplementationOnce(() => ({
    l: 'school',
  }));
  it('its should show all the list that user ask for when you type -l with the category in the command',()=>{
    let input = new Input();
    let note = new Notes();
    return note.execute(input.vaild()).then(data=>{
      expect(data[0]).toMatchObject({
        text:'this is my first test',
        category:'school',
      });
    });
  });
  minimist.mockImplementationOnce(() => ({
    l: 'school',
  }));
  it('its should show all the list that user ask for when you type -l with the category in the command',()=>{
    let input = new Input();
    let note = new Notes();
    return note.execute(input.vaild()).then(data=>{
      let _id = data[0]._id;
      minimist.mockImplementationOnce(() => ({
        d: _id,
      }));
      let input = new Input();
      let note = new Notes();
      return note.execute(input.vaild()).then(data=>{
        return expect(data).toMatchObject({
          _id:_id,
          category:'school',
          text:'this is my first test',
        });
      });
    });
  });
});