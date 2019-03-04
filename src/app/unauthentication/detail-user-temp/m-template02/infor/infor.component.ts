import { Component, OnInit, Input } from '@angular/core';

import { TemplateCouple } from '../../../../../shared/models/temp-couple';

@Component({
  selector: 'app-m-template02-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforMasterTemplate02Component implements OnInit {
  @Input('infor') infor: TemplateCouple;

  constructor() { }

  ngOnInit() {
  }

}
