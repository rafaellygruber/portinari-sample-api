import { Controller, Get, Query } from '@nestjs/common';

import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {

  constructor(private readonly menusService: MenusService) { }

  @Get()
  async getBook(@Query('search') search, @Query('department') department) {
    return await this.menusService.getMenus(search, department);
  }
}
