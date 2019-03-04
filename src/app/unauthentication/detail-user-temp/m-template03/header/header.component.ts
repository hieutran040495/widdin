import { Component, OnInit, Input } from '@angular/core';

import { TemplateCouple } from 'src/shared/models/temp-couple';
import { TemplateEvent } from 'src/shared/models/temp-event';

@Component({
  selector: 'app-m-template03-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderMasterTemplate03Component implements OnInit {
  @Input('couple') couple: TemplateCouple;
  @Input('mainEvent') mainEvent: TemplateEvent;

  public selectedItem: number;

  public menu = [
    {
      name: 'Câu chuyện',
      id: '#story',
    },
    {
      name: 'Thư mời',
      id: '#invitation',
    },
    {
      name: 'Sự kiện',
      id: '#event',
    },
    {
      name: 'RSVP',
      id: '#rsvp',
    },
    {
      name: 'Thư viện ảnh',
      id: '#gallery',
    }
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
