import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rest } from '../../models/rest.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() curRest: Rest;

  OGname;
  @Output() aTaskEventEmitter = new EventEmitter();

  error;

  constructor(private rout: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.OGname = this.curRest.name;
  }

  onCancel() {
    this.curRest.name = this.OGname;
    this.router.navigate(['/restaurants']);
  }

  onSubmitRest() {
    this.restService.getRest(this.curRest.name).subscribe( info => {
      if ((info[Object.keys(info)[0]] === 'new') || (info[Object.keys(info)[0]] === this.curRest._id)) {
        this.restService.updateRest(this.curRest).subscribe( data => {
          this.aTaskEventEmitter.emit(false);
        });
      }  else {
        this.error = 'Name is not unique';
      }
    });
  }

  triggerEvent() {
  this.aTaskEventEmitter.emit(false);
}

}
