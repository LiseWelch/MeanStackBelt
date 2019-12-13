import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { ListComponent } from './restaurant/list/list.component';
import { ViewComponent } from './restaurant/view/view.component';
import { NewComponent } from './restaurant/new/new.component';
import { EditComponent } from './restaurant/edit/edit.component';
import { ReviewComponent } from './restaurant/review/review.component';



const routes: Routes = [
  { path: 'restaurants', component: ListComponent },
  { path: 'restaurants/new', component: NewComponent},
  { path: 'restaurants/:id', component: ViewComponent},
  { path: 'restaurants/:id/edit', component: EditComponent},
  { path: 'restaurants/:id/review', component: ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
