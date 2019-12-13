import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../rest.service';
import { Rest } from '../../models/rest.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allRest: Rest[] = [];
  curRest: Rest;

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) {}

  ngOnInit() {
    this.restService.getAllRest().subscribe(data => {
      this.allRest = data;
    });
  }

    deleteRest(id: string) {
      this.restService.deleteRest(id).subscribe(del => {
        this.restService.getAllRest().subscribe(data => {
          this.allRest = data;
        });
      });
    }


}
