import { Pipe, PipeTransform } from '@angular/core';
import { formatTime } from 'rxjs-audio';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  /**
   * 
   * @param value time input from audio stream like duration or currentTime
   * @param args formatting string, like 'MM:ss'
   */
  transform(value: any, args?: any): any {
    if(args) {
      return formatTime(value, args);
    } else {
      return formatTime(value);
    }
  }

}
