const Input = require('../lib/input.js');
const minimist = require('minimist');
jest.mock('minimist');
minimist.mockImplementationOnce(() => ({
  add: 'this is my first test',
}));

describe('INPUT MODULE', () => {
  it('its should return obj with action and payload if everything is good', () => {
    const input = new Input();
    expect(input).toEqual({
      action: 'add',
      payload: 'this is my first test',
    });
  });
  minimist.mockImplementationOnce(() => ({
    wrong: 'this is my first test',
  }));
  it('its should throw error with invalid kay if the kay is not from our kay', () => {
    const input = new Input();
    expect(input).toEqual({});
  });
  minimist.mockImplementationOnce(() => ({
    add: true,
  }));
  it('its should throw error with invalid input ', () => {
    const input = new Input();
    expect(input).toEqual({});
  });
});
