import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(vardas, spalva) {
        super(vardas, spalva)
        this.sound = 'miau miau';
        this.breed = 'kate';
        this.avatar = '🐱‍👤'
    }
}
export { Cat }