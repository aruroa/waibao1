import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from "../../shared/model/activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getAllActivities(): Observable<any> {
    return this.httpClient.get('/user/activityquery')
  }

  addActivity(activity: Activity): Observable<null>{
    return this.httpClient.post<null>(`/user/activity/apply`, activity);
  }

  getActivity(activityId: string): Observable<any>{
    return this.httpClient.get(`/user/activity/detail/${activityId}`);
  }
}
