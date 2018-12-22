import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { ContentComponent } from './content/content.component';
import { SidebarDetailComponent } from './sidebar/sidebar-detail/sidebar-detail.component';
import { HotelDetailComponent } from './hotel-view/hotel-detail/hotel-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		HotelViewComponent,
		ContentComponent,
		SidebarDetailComponent,
		HotelDetailComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
