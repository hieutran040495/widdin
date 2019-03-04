import { Component, OnInit, Input } from '@angular/core';
import { TemplateEvent } from '../../../../../shared/models/temp-event';
import { TemplateRSVP } from 'src/shared/models/temp-rsvp';

@Component({
  selector: 'app-m-template02-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpMasterTemplate02Component implements OnInit {
  @Input('events') events: TemplateEvent;
  @Input('imgCover') imgCover: any;

  public rsvp: TemplateRSVP = new TemplateRSVP();
  public guestes = [{ id: 1, num: 1}, { id: 2, num: 2}, { id: 3, num: 3}];
  public isSumitting = false;

  constructor() { }

  ngOnInit() {
  }

  public onChangeEvent(e: any) {
    this.rsvp.event = e;
  }

  public onChangeGuestes(e: any) {
    this.rsvp.guestes = e.num;
  }

  public sendRSVP() {
    // Call api
  }
}
