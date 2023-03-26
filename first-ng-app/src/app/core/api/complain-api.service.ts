import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Complain} from "../../shared/model/complain";

@Injectable({
  providedIn: 'root'
})
export class ComplainApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  count(state:number,userId:number): Observable<any> {
    return this.httpClient.get<any>(`/users/complainCount/${state}/${userId}`)
  }
  getComplain(state:number,userId:number): Observable<any> {
    return this.httpClient.get(`/user/complain/`+state+`/`+userId)
  }
  accept(id: number,userId:number): Observable<null> {
    return this.httpClient.get<null>(`/user/complain/accept/`+id+`/`+userId);
  }
  done(id: number): Observable<null> {
    return this.httpClient.get<null>(`/user/complain/done/${id}`);
  }
  addComplain(complain: Complain): Observable<null>{
    return this.httpClient.post<null>(`/user/complain/apply`,complain);
  }
  getComplainDetail(userId: number): Observable<any> {
    return this.httpClient.get(`/user/complain/detail/${userId}`);
  }
  confirm(id: number): Observable<null> {
    return this.httpClient.get<null>(`/user/complain/confirm/${id}`);
  }
  readd(id: number): Observable<null> {
    return this.httpClient.get<null>(`/user/complain/readd/${id}`);
  }
  getState(userId:number) {
    return this.httpClient.get<number>(`/user/complain/getState/${userId}`)
  }
  countUser(userId:number): Observable<number> {
    return this.httpClient.get<number>(`/user/complain/countUser/${userId}`)
  }
}
