
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';

export class TimepickerHelper {
  public static getTimepickerConfig(): TimepickerConfig {
    return Object.assign(new TimepickerConfig(), {
      hourStep: 1,
      minuteStep: 5,
      showMeridian: false,
      readonlyInput: false,
      mousewheel: true,
      showMinutes: true,
      showSeconds: false
    });
  }
}
