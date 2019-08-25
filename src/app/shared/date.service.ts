import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class DateService {
    public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

    public changeMonth(num: number) {
      const value = this.date.value.add(num, 'month');
      this.date.next(value);
    }
}
