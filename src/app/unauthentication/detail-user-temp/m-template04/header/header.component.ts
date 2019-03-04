import { Component, OnInit, Input } from '@angular/core';

import { TemplateCouple } from 'src/shared/models/temp-couple';
import { TemplateEvent } from 'src/shared/models/temp-event';

@Component({
  selector: 'app-m-template04-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderMasterTemplate04Component implements OnInit {
  @Input('couple') couple: TemplateCouple;
  @Input('mainEvent') mainEvent: TemplateEvent;

  public selectedItem: number;

  public menu = [
    {
      name: 'Thư mời',
      id: '#invitation',
    },
    {
      name: 'Châm ngôn',
      id: '#maxim',
    },
    {
      name: 'Câu chuyện',
      id: '#story',
    },
    {
      name: 'Sự kiện',
      id: '#event',
    },
    {
      name: 'RSVP',
      id: '#rsvp',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public chooseItem(i?: number) {
    if (!i) {
      this.selectedItem = 0;
    }

    this.selectedItem = i;
  }
}
