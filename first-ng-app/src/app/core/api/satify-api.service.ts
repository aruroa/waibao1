import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Satify} from "../../shared/model/satify";

@Injectable({
  providedIn: 'root'
})
export class SatifyApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  count(term: number): Observable<any> {
    return this.httpClient.get(`/users/satifyCount/${term}`)
  }

  getAllSatify(term: number): Observable<any> {
    return this.httpClient.get(`/user/satify/${term}`)
  }

  addSatify(satify: Satify): Observable<null>{
    return this.httpClient.post<null>(`/user/satify/fill`,satify);
  }

}
