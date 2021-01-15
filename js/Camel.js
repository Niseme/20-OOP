import { Animal } from './Animal.js';

class Camel extends Animal {
    constructor(vardas, spalva) {
        this.sound = 'nom nom';
        this.breed = 'kupranugaris'
        this.avatar = 'kuprio avataras'
    }
}

export { Camel }