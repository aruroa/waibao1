import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../../shared/model/user";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  /**
   * Communicate with backend to create new user record
   * @param id id of user
   */
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`/users/${id}`);
  }

  /**
   * Communicate with backend to create new user record
   * @param user user for creating
   */
  create(user: User): Observable<User> {
    return this.httpClient.post<User>('/users', user);
  }

  /**
   * Login backend with given user form value
   * @param loginFormValue value of login form
   */
  login(loginFormValue: any): Observable<any> {
    return this.httpClient.post<any>(`/login?username=${loginFormValue.username}&password=${loginFormValue.password}`, {});
  }

  count(): Observable<any> {
    return this.httpClient.get('/users/count')
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('/users');
  }

  getUserByName(name: String): Observable<User[]> {
    return this.httpClient.get<User[]>(`/users/search/${name}`);
  }

  getUserByUsername(username: String): Observable<number> {
    return this.httpClient.get<number>(`/users/getId/${username}`);
  }

  /**
   * Delete user by id
   * @param id
   */
  delete(id: number): Observable<null> {
    return this.httpClient.delete<null>(`/users/${id}`);
  }

  updata(user: User | undefined): Observable<null> {
    return this.httpClient.post<null>(`/users/upusers`,user);
  }

  logout() {
    return this.httpClient.get<any>(`/logout`);
  }

  getType(userId: number) {
    return this.httpClient.get<number>(`/users/getType/${userId}`)
  }
}
