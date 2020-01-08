import { Controller, Get, Body, Post, Delete, Query, Param } from '@nestjs/common';

import { HeroesService } from './heroes.service';
import { Hero } from './hero.interface';

@Controller('heroes')
export class HeroesController {

  constructor(private readonly heroesService: HeroesService) { }
 
  @Get()
  async find(): Promise<Hero[]> {
    return await this.heroesService.getHeroes();
  }

  @Get(':heroId')
  async getBook(@Param('heroId') heroId) {
      const hero = await this.heroesService.getHero(heroId);
      return hero;
  }

  @Post()
  async addHero(@Body() createHero: Hero) {
      const hero = await this.heroesService.addHero(createHero);
      return hero;
  }

  @Delete()
  async deleteHero(@Query() query) {
      const heroes = await this.heroesService.deleteHero(query);
      return heroes;
  }

}