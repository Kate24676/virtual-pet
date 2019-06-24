const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
}

Pet.prototype.walk = function() {
    if (!this.isAlive()) {
        throw new Error ('Your pet is no longer alive :(');
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
      } else {
        this.fitness = MAXIMUM_FITNESS;
      }
    }

Pet.prototype.feed = function() {
    if (!this.isAlive()) {
        throw new Error ('Your pet is no longer alive :(');
    }  
    if ((this.hunger - 3) <= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    if (!this.isAlive()) {
        throw new Error('Your pet is no longer alive :(');
    }
    if (this.fitness <= 3 && this.hunger <= 5) {
        return 'I need a walk';
    }

    if (this.hunger >= 5 && this.fitness >= 3) {
        return 'I am hungry';
    }

    if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
    }

    return 'I feel great!';
}

Pet.prototype.isAlive = function() {
    if (this.fitness <= 0) {
        return false;
    }

    if (this.hunger >= 10) {
        return false;
    }
    if (this.age >= 30) {
        return false;
    }
        return true;
    }

    Pet.prototype.growUp = function() {
            this.age += 1;
            this.hunger += 5;
            this.fitness -= 3;
    
        if (!this.isAlive()) {
            throw new Error('Your pet is no longer alive :(');
        }
    }

    Pet.prototype.adoptChild = function(child) {
        this.children.push(child);
    }

module.exports = Pet;