import { Module } from '@nestjs/common';

import { HeroesModule } from './heroes/heroes.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [
    HeroesModule,
    MenusModule
  ]
})
export class AppModule {}
