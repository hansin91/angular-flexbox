import { Injectable } from '@angular/core';
import { reviews } from '../../data/reviews';
import { Review } from '../models/review';

@Injectable({
	providedIn: 'root'
})
export class ReviewService {
	private userReviews: Review[] = [];

	constructor() {
		reviews.forEach((re) => {
			const review = new Review();
			Object.assign(review, re);
			this.userReviews.push(review);
		});
	}

	getReviews(): Review[] {
		return this.userReviews;
	}
}
