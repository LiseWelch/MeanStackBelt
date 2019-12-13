import { Component, OnInit } from '@angular/core';
import { Rest } from '../../models/rest.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  curRest: Rest;

  constructor(private rout: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.rout.params.subscribe(param => {
      this.restService.getOneRest(param.id).subscribe(data => {
        this.curRest = data;
      });
    });
  }

  onCancel() {
    this.router.navigate(['/restaurants']);
  }

  onSubmitRest() {
    this.restService.updateRest(this.curRest).subscribe( data => {
      this.router.navigate(['/restaurants']);
    });
  }

}
