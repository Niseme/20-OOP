import { Fish } from './Fish.js';

class Goldfish extends Fish {
    constructor(vardas, spalva) {
        super(vardas, spalva)
        this.grantsWishes = true;

    }

    makeWish(myWish) {
        return `${this.name} (${this.breed}) ${this.grantsWishes ? `gives you ${myWish}` : `suvalgykim ja`}`;

    }

}


export { Goldfish }
