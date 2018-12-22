import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
	selector: 'app-user-review',
	templateUrl: './user-review.component.html',
	styleUrls: [ './user-review.component.scss' ]
})
export class UserReviewComponent implements OnInit {
	@Input() reviews: Review[];
	constructor() {}

	ngOnInit() {}
}
