const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Pixie').name).toBe('Pixie');
    });
  });
  