import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';
import { ReviewService } from '../../services/review.service';

@Component({
	selector: 'app-hotel-detail',
	templateUrl: './hotel-detail.component.html',
	styleUrls: [ './hotel-detail.component.scss' ]
})
export class HotelDetailComponent implements OnInit {
	private list: string[];
	private friendPhotos: any[];
	private reviews: Review[] = [];
	constructor(private reviewService: ReviewService) {
		this.list = [
			'Close to the beach',
			'Breakfast included',
			'Free airport shuttle',
			'Free wifi in all rooms',
			'Air conditioning and heating',
			'Pets allowed',
			'We speak all languages',
			'Perfect for families'
		];

		this.friendPhotos = [
			{
				name: 'Friend 1',
				image: 'assets/img/user-3.jpg'
			},
			{
				name: 'Friend 2',
				image: 'assets/img/user-4.jpg'
			},
			{
				name: 'Friend 3',
				image: 'assets/img/user-5.jpg'
			},
			{
				name: 'Friend 4',
				image: 'assets/img/user-6.jpg'
			}
		];

		this.reviews = this.reviewService.getReviews();
	}

	ngOnInit() {}
}
