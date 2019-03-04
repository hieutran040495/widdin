import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-video',
  templateUrl: './template-video.component.html',
  styleUrls: ['./template-video.component.scss']
})
export class TemplateVideoComponent implements OnInit {
  public isSumitting = false;

  constructor() { }

  ngOnInit() {
  }

  public updateTempVideo() {
    // Do sth
  }
}
