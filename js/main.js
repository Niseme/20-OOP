import { Bird } from './Bird.js';
import { Dragonfly } from './Dragonfly.js';
import { Fish } from './Fish.js';
import { Goldfish } from './Goldfish.js'

const Birdnew = new Bird('Vudis', 'margas');
const Dragonnew = new Dragonfly('Hektoras', 'zalias');
const Fishnew = new Fish('Dori', 'Melyna');
const AuksineZuvele = new Goldfish('Ariele', 'auksine');


console.log(Birdnew.flyAway());
Birdnew.introduce();
Dragonnew.introduce();
console.log(Fishnew.swimAway());
console.log(AuksineZuvele.makeWish('Namu darbu'));


