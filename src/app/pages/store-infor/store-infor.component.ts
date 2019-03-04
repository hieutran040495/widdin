import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-infor',
  templateUrl: './store-infor.component.html',
  styleUrls: ['./store-infor.component.scss']
})
export class StoreInforComponent implements OnInit {
  public isSumitting = false;

  constructor() { }

  ngOnInit() {
  }

  public updateStore() {
    // Do sth
  }

}
