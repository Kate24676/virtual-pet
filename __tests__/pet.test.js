const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Pixie').name).toBe('Pixie');
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Pixie');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });