import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  newReview: Review = {
    rating: 1,
    review: '',
    name: '',
  };

  constructor(private rout: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.rout.params.subscribe(param => {
      this.newReview.restID = param.id;
    });
  }

  onCancel() {
    this.router.navigate(['/restaurants', this.newReview.restID]);
    this.newReview = {
      name: '',
      rating: 1,
      review: '',
    };
  }

  onSubmitReview() {
    this.rout.params.subscribe(param => {
      this.newReview.restID = param.id;
      this.restService.createReview(this.newReview).subscribe( data => {
        this.router.navigate(['/restaurants', data.restID]);
        this.newReview = {
          name: '',
          rating: 1,
          review: '',
        };
      });
    });
  }
}
