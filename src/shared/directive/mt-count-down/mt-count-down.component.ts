import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
declare const $: any;

import { ScriptLoaderService } from 'src/shared/utils/script-loader.service';

@Component({
  selector: 'app-mt-count-down',
  templateUrl: './mt-count-down.component.html',
  styleUrls: ['./mt-count-down.component.scss']
})
export class MtCountDownComponent implements OnInit, AfterViewInit {

  private _date: string;
  @Input('date')
  public get date(): string {
    return this._date;
  }
  public set date(v: string) {
    this._date = v;
  }

  constructor(
    private _script: ScriptLoaderService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._script.load('app-mt-count-down',
    '../../../assets/vendors/jquery.countdown.min.js');

    $('#clock').countdown(this.date, {elapse: true})
    .on('update.countdown', function(event) {
      const html =
      '<span class="countdown-section"><span class="countdown-amount">%D</span><span class="countdown-period">ngày</span></span>'
      + '<span class="countdown-section"><span class="countdown-amount">%H</span><span class="countdown-period">giờ</span></span>'
      + '<span class="countdown-section"><span class="countdown-amount">%M</span><span class="countdown-period">phút</span></span>'
      + '<span class="countdown-section"><span class="countdown-amount">%S</span><span class="countdown-period">giây</span></span>';

      if (event.elapsed) {
        $(this).html(event.strftime(html));
      } else {
        $(this).html(event.strftime(html));
      }
    });
  }
}
