import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TemplateEvent } from 'src/shared/models/temp-event';

@Component({
  selector: 'app-m-template04-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CountdownMasterTemplate04Component implements OnInit {
  @Input('mainEvent') mainEvent: TemplateEvent;

  constructor(
  ) { }

  ngOnInit() {
  }

}
