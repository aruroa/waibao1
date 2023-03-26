import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Punch} from "../../shared/model/punch";

@Injectable({
  providedIn: 'root'
})
export class PunchApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  count(userId:number): Observable<number> {
    return this.httpClient.get<number>(`/user/punchCount/${userId}`)
  }
  getPunch(userId:number): Observable<any> {
    return this.httpClient.get(`/user/punch/`+userId)
  }
  punchUp(userId:number,building:String): Observable<null> {
    return this.httpClient.get<null>(`/user/punch/punchUp/${userId}/${building}`);
  }
  addPunch(userId:number): Observable<null>{
    return this.httpClient.get<null>(`/user/punch/apply${userId}`);
  }

}
