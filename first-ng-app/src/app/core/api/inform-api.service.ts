import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inform} from '../../shared/model/inform';

@Injectable({
  providedIn: 'root'
})
export class InformApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getAllInform(): Observable<any> {
    return this.httpClient.get('/user/inform')
  }

  addInform(inform: Inform): Observable<null>{
    return this.httpClient.post<null>(`/user/addInform`, inform);
  }
}
