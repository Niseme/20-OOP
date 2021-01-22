
import { Bird } from './Bird.js';

class Dragonfly extends Bird {
    constructor(vardas, spalva) {
        super(vardas, spalva)
        this.imposter = true;
    }


    introduce() {
        console.log(`as esu ${this.name}, ${this.color} spalvos ${this.breed} (wanna be paukstis)${this.avatar}`);
    }






}




export { Dragonfly }