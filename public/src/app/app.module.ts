import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NewComponent } from './restaurant/new/new.component';
import { ListComponent } from './restaurant/list/list.component';
import { ViewComponent } from './restaurant/view/view.component';
import { EditComponent } from './restaurant/edit/edit.component';
import { ReviewComponent } from './restaurant/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    NewComponent,
    ListComponent,
    ViewComponent,
    EditComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
