
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

export class DatepickerHelper {
  public static getDatepickerConfig(): BsDatepickerConfig {
    return Object.assign(new BsDatepickerConfig(), {
      containerClass: 'theme-default',
      dateInputFormat: 'DD/MM/YYYY',
    });
  }
}
