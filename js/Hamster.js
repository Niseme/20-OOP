import { Pet } from './Pet.js';

class Hamster extends Pet {
    constructor(vardas, spalva) {
        super(vardas, spalva)
        this.sound = 'niom niom';
        this.breed = 'hamsteris';
        this.avatar = '🐹';
        this.canEatTillDeath = 'skanaus';
    }
}
export { Hamster }