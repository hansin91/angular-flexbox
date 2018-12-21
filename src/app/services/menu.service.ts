import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { menus } from '../../data/menus';

@Injectable({
	providedIn: 'root'
})
export class MenuService {
	private sidebarMenus: Menu[] = [];
	constructor() {
		menus.forEach((m) => {
			const menu = new Menu();
			Object.assign(menu, m);
			this.sidebarMenus.push(menu);
		});
	}

	getSidebarMenus(): Menu[] {
		return this.sidebarMenus;
	}
}
