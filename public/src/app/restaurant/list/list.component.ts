import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  editOn = false;

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) {}

  dataFromChild(eventData){
    this.editOn = eventData;
  }

  ngOnInit() {
    this.restService.getAllRest().subscribe(data => {
      this.allRest = data;
    });
    this.editOn = false;
  }

    deleteRest(id: string) {
      this.restService.deleteRest(id).subscribe(del => {
        this.restService.getAllRest().subscribe(data => {
          this.allRest = data;
        });
      });
    }


}
