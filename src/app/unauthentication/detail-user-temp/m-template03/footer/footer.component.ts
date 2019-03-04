import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-m-template03-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterMasterTemplate03Component implements OnInit {
  @Input('imgCover') imgCover: any;

  constructor() { }

  ngOnInit() {
  }

}
