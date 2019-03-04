import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-account',
  templateUrl: './manager-account.component.html',
  styleUrls: ['./manager-account.component.scss']
})
export class ManagerAccountComponent implements OnInit {
  public isLoading = false;

  constructor() { }

  ngOnInit() {
  }
}
