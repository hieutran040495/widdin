import { Component, OnInit, Input } from '@angular/core';

import { TemplateCouple } from 'src/shared/models/temp-couple';
import { TemplateEvent } from 'src/shared/models/temp-event';

@Component({
  selector: 'app-m-template02-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderMasterTemplate02Component implements OnInit {
  @Input('couple') couple: TemplateCouple;
  @Input('mainEvent') mainEvent: TemplateEvent;
  @Input('imgCover') imgCover: any;

  constructor() { }

  ngOnInit() {
  }

}
