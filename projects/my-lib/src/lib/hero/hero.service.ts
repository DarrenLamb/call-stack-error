import { Hero } from './hero';

export class HeroService {
    getHero(): Hero {
        return new Hero();
    }
}
