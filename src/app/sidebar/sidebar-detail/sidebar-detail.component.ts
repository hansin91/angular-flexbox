import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
	selector: 'app-sidebar-detail',
	templateUrl: './sidebar-detail.component.html',
	styleUrls: [ './sidebar-detail.component.scss' ]
})
export class SidebarDetailComponent implements OnInit {
	@Input() menus: Menu[];
	constructor() {}

	ngOnInit() {}
}
