import { Component, OnInit } from '@angular/core';
import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';

import { StoreService } from '../../../shared/services/store.service';
import { NotifyService } from '../../../shared/services/notify.service';

import { ModalCreateStoreComponent } from '../modal-create-store/modal-create-store.component';

import { Store } from '../../../shared/models/store';
import { MODAL } from '../../../shared/enums/modal';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  public isLoading = false;
  public stores: Store[] = [];

  constructor(
    private _storeService: StoreService,
    private _notifyService: NotifyService,
    private _modalService: BsModalService,
  ) { }

  ngOnInit() {
    this._getStores();
  }

  private _getStores() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.stores = [];

    const opts = {
      order: 'desc'
    };

    this._storeService.getStores(opts)
    .subscribe(res => {
      // res.data.items.map(item => {
      //   this.stores.push(new Store(item));
      // });

      res.map(item => {
        this.stores.push(new Store(item));
      });

      console.log(this.stores);


      this.isLoading = false;
    }, errors => {
      this._notifyService.error(errors);
      this.isLoading = false;
    });
  }


  // Modal entry component
  public openCreateStoreModal() {
    const configs = {
      class: MODAL.SIZE_MD,
    };

    this._openEntryModal(ModalCreateStoreComponent, configs);
  }

  private _openEntryModal(comp, configs?: ModalOptions) {
    const _subscribe = this._modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'reload') {
        // this._getEvents();
      }

      _subscribe.unsubscribe();
    });

    this._modalService.show(comp, configs);
  }
}
