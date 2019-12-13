import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Restaurants';

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) {}

  ngOnInit() {
    this.router.navigate(['/restaurants']);
  }

}
