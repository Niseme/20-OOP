import { Animal } from './Animal.js';

class Fish extends Animal {
    constructor(vardas, spalva) {
        super(vardas, spalva)
        this.canSwim = true;

    }
    swimAway() {
        return `${this.name} (${this.breed}) ${this.canSwim ? `plaukia` : `nemoka plaukti`} `;
    }
}


export { Fish }
