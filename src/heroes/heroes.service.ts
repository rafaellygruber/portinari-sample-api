import { Injectable, HttpException } from '@nestjs/common';

import { HEROES } from './heroes.data';

import { Hero } from './hero.interface';

@Injectable()
export class HeroesService {

  heroes = HEROES;

  getHeroes(): Promise<any> {
    return new Promise(resolve => resolve(this.heroes));
  }

  getHero(heroId): Promise<any> {

    let id = Number(heroId);

    return new Promise(resolve => {
      const hero = this.heroes.find(hero => hero.id === id);

      if (!hero) {
        throw new HttpException('Hero does not exist!', 404);
      }

      resolve(hero);
    });
  }

  addHero(hero: Hero): Promise<any> {
    return new Promise(resolve => {
      this.heroes.push(hero);
      resolve(this.heroes);
    });
  }

  deleteHero(heroId): Promise<any> {
    let id = Number(heroId);
    return new Promise(resolve => {
      let index = this.heroes.findIndex(hero => hero.id === id);

      if (index === -1) {
        throw new HttpException('Hero does not exist!', 404);
      }

      this.heroes.splice(1, index);
      resolve(this.heroes);
    });
  }

}