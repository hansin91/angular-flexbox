import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {
	public menus: Menu[];
	constructor(private menuService: MenuService) {
		this.menus = this.menuService.getSidebarMenus();
	}

	ngOnInit() {}
}
