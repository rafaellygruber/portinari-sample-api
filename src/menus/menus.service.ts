import { Injectable, HttpException } from '@nestjs/common';

import { MENUS } from './menus.data';
import { Menu } from './menu.interface';

@Injectable()
export class MenusService {

  menus: Array<Menu> = MENUS;

  getMenus(search, department): Promise<any> {
    const hasFilter = search || department;

    const menus = hasFilter ? this.filterMenus(search, department) : this.menus;

    return new Promise(resolve => resolve(menus));
  }

  filterMenus(search: string, department: string) {

    const response = {
      items: this.menus.filter(menu =>
        this.includesMenuFilter(menu, 'label', search) ||
        this.includesMenuFilter(menu, 'department', department))
    };

    return response;
  }

  includesMenuFilter(menu: Menu, property: string, filter: string): boolean {
    if (!filter) return;

    return menu[property].toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  }

}