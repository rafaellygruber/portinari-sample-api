import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Query,
  Param
} from '@nestjs/common';

import { HeroesService } from './heroes.service';
import { Hero } from './hero.interface';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  async find(): Promise<Array<Hero>> {
    return await this.heroesService.getHeroes();
  }

  @Get(':heroId')
  async getBook(@Param('heroId') heroId) {
    return await this.heroesService.getHero(heroId);
  }

  @Post()
  async addHero(@Body() createHero: Hero) {
    return await this.heroesService.addHero(createHero);
  }

  @Delete()
  async deleteHero(@Query() query) {
    return await this.heroesService.deleteHero(query);
  }
}
