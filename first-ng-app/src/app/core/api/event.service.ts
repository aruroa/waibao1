import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schedule} from "../../shared/model/schedule";

@Injectable()
export class EventService {

  constructor(private readonly httpClient: HttpClient) {}

  getEvents(): any {
    return this.httpClient.get('showcase/resources/data/calendarevents.json')
      .toPromise()
      .then(data => { return data; });
  }

  getSchedules(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(`/user/schedule`);
  }

  signIn(date: string, userId: any): Observable<any> {
    return this.httpClient.post(`/user/sign`, [date, userId]);
  }
}
