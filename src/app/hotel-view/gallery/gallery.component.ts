import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: [ './gallery.component.scss' ]
})
export class GalleryComponent implements OnInit {
	@Input() hotels: Hotel[];
	constructor() {}

	ngOnInit() {}
}
