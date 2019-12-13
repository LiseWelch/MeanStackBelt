import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) {}

  ngOnInit() {
    this.router.navigate(['/restaurants']);
  }

}
