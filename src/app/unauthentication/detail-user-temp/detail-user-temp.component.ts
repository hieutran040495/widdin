import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserTemplateService } from 'src/shared/services/user-template.service';
import { NotifyService } from 'src/shared/services/notify.service';

@Component({
  selector: 'app-detail-user-temp',
  templateUrl: './detail-user-temp.component.html',
  styleUrls: [
    '../../../styles/detail-user-temp/index.scss',
    './detail-user-temp.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DetailUserTemplateComponent implements OnInit {

  public isLoading = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userTempService: UserTemplateService,
    private _notifyService: NotifyService,
  ) { }

  ngOnInit() {
    if (this._route.snapshot.params.hasOwnProperty('id')) {
      const id = +this._route.snapshot.params.id;
      this._checkUser(id);
    }
  }

  private _checkUser(userId: number) {
    if (this.isLoading) {
      return;
    }

    this._userTempService.getUserTemplateInfor(userId)
    .subscribe(res => {
      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
      this._router.navigate(['/page-not-found']);
    });
  }


}
