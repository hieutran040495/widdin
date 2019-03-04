import { Component, OnInit, Input } from '@angular/core';
import { TemplateEvent } from 'src/shared/models/temp-event';

@Component({
  selector: 'app-m-template02-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountdownMasterTemplate02Component implements OnInit {
  @Input('mainEvent') mainEvent: TemplateEvent;
  @Input('imgCover') imgCover: any;

  constructor(
  ) { }

  ngOnInit() {
  }

}
