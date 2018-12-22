import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';

@Component({
	selector: 'app-hotel-detail',
	templateUrl: './hotel-detail.component.html',
	styleUrls: [ './hotel-detail.component.scss' ]
})
export class HotelDetailComponent implements OnInit {
	@Input() hotels: Hotel[];
	constructor() {}

	ngOnInit() {}
}
