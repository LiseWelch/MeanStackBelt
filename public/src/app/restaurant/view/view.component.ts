import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.interface';
import { Rest } from '../../models/rest.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  allReviews: Review[] = [];
  curID: string;

  constructor(private rout: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.rout.params.subscribe(param => {
      this.curID = param.id;
      this.restService.getAllReviews(param.id).subscribe(data => {
        this.allReviews = data;
      });
    });
  }

}
