import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(vardas, spalva) {
        super(vardas, spalva)
        this.sound = 'au au';
        this.breed = 'suo';
        this.avatar = '🐶'
    }
}
export { Dog }