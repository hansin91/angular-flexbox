import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { ContentComponent } from './content/content.component';
import { SidebarDetailComponent } from './sidebar/sidebar-detail/sidebar-detail.component';
import { GalleryComponent } from './hotel-view/gallery/gallery.component';
import { HotelDetailComponent } from './hotel-view/hotel-detail/hotel-detail.component';
import { UserReviewComponent } from './hotel-view/user-review/user-review.component';
import { HotelService } from './services/hotel.service';
import { MenuService } from './services/menu.service';
import { ReviewService } from './services/review.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		HotelViewComponent,
		ContentComponent,
		SidebarDetailComponent,
		GalleryComponent,
		HotelDetailComponent,
		UserReviewComponent
	],
	imports: [ BrowserModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ],
	providers: [ HotelService, MenuService, ReviewService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
