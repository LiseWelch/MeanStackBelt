import { Injectable } from '@angular/core';
import { Rest } from './models/rest.interface';
import { Review } from './models/review.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor( private http: HttpClient ) {}

  getAllRest() {
    return this.http.get<Rest[]>('/api/restaurants');
  }

  getOneRest(id: string) {
    return this.http.get<Rest>(`/api/restaurants/${id}`);
  }

  createRest(rest: Rest) {
    return this.http.post<Rest>('/api/restaurants/new', rest);
  }

  updateRest(rest: Rest) {
    return this.http.put<Rest>(`/api/restaurants/${rest._id}/edit`, rest);
  }

  deleteRest(id: string) {
    return this.http.delete(`/api/restaurants/${id}/remove`);
  }

  createReview(review: Review) {
    return this.http.post<Review>(`/api/restaurants/${review.restID}/review`, review);
  }

  getAllReviews(id: string) {
    return this.http.get<Review[]>(`/api/restaurants/reviews/${id}`);
  }

  getRest(nameR: string) {
    return this.http.get(`/api/getone/${nameR}`);
  }

}
