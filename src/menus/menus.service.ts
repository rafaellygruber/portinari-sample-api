import { Injectable, HttpException } from '@nestjs/common';

import { MENUS } from './menus.data';

@Injectable()
export class MenusService {

  menus = MENUS;

  getMenus(): Promise<any> {
    return new Promise(resolve => resolve(this.menus));
  }

}