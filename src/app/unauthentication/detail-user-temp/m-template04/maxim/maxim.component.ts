import { Component, OnInit, Input } from '@angular/core';
import { TemplateMaxim } from '../../../../../shared/models/temp-maxim';

@Component({
  selector: 'app-m-template04-maxim',
  templateUrl: './maxim.component.html',
  styleUrls: ['./maxim.component.scss']
})
export class MaximMasterTemplate04ComponentComponent implements OnInit {
  @Input('imgCover') imgCover: any;
  @Input('maxims') maxims: TemplateMaxim[];

  constructor() { }

  ngOnInit() {
  }

}
