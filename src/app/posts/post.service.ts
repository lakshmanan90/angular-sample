import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POSTAPI } from './post.constants';
import { PostInterface } from './post.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostList(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(POSTAPI.GET_POST_LIST);
  }
  getPostById(id: number): Observable<PostInterface> {
    return this.http.get<PostInterface>(POSTAPI.GET_POST_BYID + id);
  }

  getUpdateById(id: number, payload: any) {
    return this.http.put(POSTAPI.GET_POST_UPDATE + id, payload);
  }

  getNewPost(payload: any) {
    return this.http.post(POSTAPI.GET_POST_NEW, payload)

  }
  deletePost(id: number) {
    return this.http.delete(POSTAPI.GET_POST_DELETE + id);
  }
  
}
