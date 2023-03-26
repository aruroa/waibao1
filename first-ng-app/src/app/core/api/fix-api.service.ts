import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fix} from "../../shared/model/fix";

@Injectable({
  providedIn: 'root'
})
export class FixApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  count(state:number,userId:number): Observable<any> {
    return this.httpClient.get<any>(`/users/fixCount/${state}/${userId}`)
  }
  getFix(state:number,userId:number): Observable<any> {
    return this.httpClient.get(`/user/fix/`+state+`/`+userId)
  }
  accept(fix: Fix): Observable<null> {
    return this.httpClient.post<null>(`/user/fix/accept/`,fix);
  }
  done(id: number): Observable<null> {
    return this.httpClient.get<null>(`/user/fix/done/${id}`);
  }
  report(fix: Fix): Observable<null> {
    return this.httpClient.post<null>(`/user/fix/report/`,fix);
  }
  addFix(fix: Fix): Observable<null>{
    return this.httpClient.post<null>(`/user/fix/apply`,fix);
  }
  getFixDetail(userId: number): Observable<any> {
    return this.httpClient.get(`/user/fix/detail/${userId}`);
  }
  end(id: number): Observable<null> {
    return this.httpClient.get<null>(`/user/fix/end/${id}`);
  }
  confirm(id: number): Observable<null> {
    return this.httpClient.get<null>(`/user/fix/confirm/${id}`);
  }
  readd(id: number): Observable<null> {
    return this.httpClient.get<null>(`/user/fix/readd/${id}`);
  }
  getState(userId:number) {
    return this.httpClient.get<number>(`/user/fix/getState/${userId}`)
  }
  countUser(userId:number): Observable<number> {
    return this.httpClient.get<number>(`/users/fix/countUser/${userId}`)
    }
}
