import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { hotels } from '../../data/hotels';

@Injectable({
	providedIn: 'root'
})
export class HotelService {
	private galleryHotels: Hotel[] = [];
	constructor() {
		hotels.forEach((h) => {
			const hotel = new Hotel();
			Object.assign(hotel, h);
			this.galleryHotels.push(hotel);
		});
	}

	getHotels(): Hotel[] {
		return this.galleryHotels;
	}
}
