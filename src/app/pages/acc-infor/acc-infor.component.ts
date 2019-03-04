import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-infor',
  templateUrl: './acc-infor.component.html',
  styleUrls: ['./acc-infor.component.scss']
})
export class AccountInforComponent implements OnInit {
  public isSumitting = false;

  constructor() { }

  ngOnInit() {
  }

  public updateStore() {
    // Do sth
  }
}
