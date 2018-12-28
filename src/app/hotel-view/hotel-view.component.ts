import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';

@Component({
	selector: 'app-hotel-view',
	templateUrl: './hotel-view.component.html',
	styleUrls: [ './hotel-view.component.scss' ]
})
export class HotelViewComponent implements OnInit {
	public hotels: Hotel[] = [];
	constructor(private hotelService: HotelService) {
		this.hotels = this.hotelService.getHotels();
	}

	ngOnInit() {}
}
