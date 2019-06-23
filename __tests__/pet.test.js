const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Pixie').name).toBe('Pixie');
    });
});

describe('growUp', () => {
 it('increases the age by 1', () => {
    const pet = new Pet('Pixie');
  
    pet.growUp();
  
    expect(pet.age).toEqual(1);
    });
});

describe('growUp', () => {
    it('increases the hunger by 5', () => {
        const pet = new Pet('Pixie');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
}); 

describe('growUp', () => {
    it('decreases the fitness by 3', () => {
        const pet = new Pet('Pixie');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
  
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });