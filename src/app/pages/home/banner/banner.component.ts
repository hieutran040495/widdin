import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public img = 'https://ak8.picdn.net/shutterstock/videos/1169998/thumb/10.jpg';

  constructor() { }

  ngOnInit() {
  }

}
