const Pet = require('../src/pet');

describe('adoptChild', () => {
    it('makes pet give birth to baby', () => {
      const parent = new Pet('Gina');
      const child = new Pet('Simba');

      parent.adoptChild(child);
      parent.children['Simba'];
        
      expect(parent.children.includes(child));

    });
});


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

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Hera');

    pet.age = 30;

    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });


describe('walk', () => {
  
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('Hera');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

    it('throws an error if the pet is not alive', () => {
         const pet = new Pet('Hera');

         pet.fitness = 0;

         expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
     });


  describe('feed', () => {
    it('decreases the hunger by 3', () => {
        const pet = new Pet('Pixie');

        pet.feed();

        expect(pet.hunger).toEqual(-3);
    });
}); 

describe('checkUp', () => {
    it('checks fitness', () => {
        const pet = new Pet('Pixie');

        pet.fitness = 2;

        expect(pet.checkUp()).toEqual('I need a walk');
    });
}); 

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Hera');

        pet.age = 30;
  
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
      });


describe('checkUp', () => {
    it('checks hunger and fitness', () => {
        const pet = new Pet('Pixie');

        pet.hunger = 4;
        pet.fitness = 7;

        expect(pet.checkUp()).toEqual('I feel great!');
    });
}); 

describe('checkUp', () => {
    it('checks hunger', () => {
        const pet = new Pet('Pixie');

        pet.hunger = 6;

        expect(pet.checkUp()).toEqual('I am hungry');
    });
}); 

describe('checkUp', () => {
    it('checks hunger and fitness', () => {
        const pet = new Pet('Pixie');

        pet.hunger = 6;
        pet.fitness = 2;

        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
}); 

describe('isAlive', () => {
    it('checks if pet is alive', () => {
        const pet = new Pet('Pixie');

        pet.fitness = 0;

        expect(pet.isAlive()).toEqual(false);
    });
});

    describe('isAlive', () => {
        it('checks if pet is alive', () => {
            const pet = new Pet('Pixie');
    
            pet.hunger = 10;

            expect(pet.isAlive()).toEqual(false);
        });
    }); 

    describe('isAlive', () => {
        it('checks if pet is alive', () => {
            const pet = new Pet('Pixie');
    
            pet.age = 30;

            expect(pet.isAlive()).toEqual(false);
        });
    }); 

    describe('feed', () => {
        it('throws an error if the pet is not alive', () => {
            const pet = new Pet('Hera');

            pet.age = 30;

            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
    });






















