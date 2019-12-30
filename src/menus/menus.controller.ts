import { Controller, Get } from '@nestjs/common';

import { MenusService } from './menus.service';
import { Menu } from './menu.interface';

@Controller('menus')
export class MenusController {

  constructor(private readonly menusService: MenusService) { }
 
  @Get()
  async find(): Promise<Menu[]> {
    return await this.menusService.getMenus();
  }
}
