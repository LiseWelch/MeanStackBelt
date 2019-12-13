import { Component, OnInit } from '@angular/core';
import { Rest } from '../../models/rest.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  newRest: Rest = {
    name: '',
    cuisine: ''
  };

  error: string;

  constructor(private rout: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.error = null;
  }

  onCancel() {
    this.router.navigate(['/restaurants']);
    this.newRest = {
      name: '',
      cuisine: ''
      };
  }

  onSubmitRest() {
    this.restService.getRest(this.newRest.name).subscribe( info => {
      if (info[Object.keys(info)[0]] === 'new') {
        this.restService.createRest(this.newRest).subscribe( data => {
          this.router.navigate(['/restaurants']);
          this.newRest = {
            name: '',
            cuisine: ''
          };
      });
    } else {
      this.error = 'Name is not unique';
    }
    });
  }

}
