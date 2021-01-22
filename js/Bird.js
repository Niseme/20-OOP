import { Animal } from './Animal.js';

class Bird extends Animal {
    constructor(vardas, spalva) {
        super(vardas, spalva)
        this.wingsCount = '2';
        this.canFly = true;

    }


    flyAway() {
        return `${this.name} (${this.breed}) ${this.canFly ? `nuskrido` : `nemoka skristi`}`;

    }
}
export { Bird }

