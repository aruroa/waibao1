import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from "../../shared/model/post";

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getAllPost(): Observable<any> {
    return this.httpClient.get('/user/query')
  }

  addPost(post: Post): Observable<null>{
    return this.httpClient.post<null>(`/user/post`, post);
  }

  getPost(postId: string): Observable<any>{
    return this.httpClient.get(`/user/dashboard/detail/${postId}`);
  }
}
