import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PostModel } from '../models/post.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/post';

  constructor(private http: HttpClient) { }

  crearPost(post: PostModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(post);
    console.log(body);
    return this.http.post<PostModel>(this.url, body, {'headers': headers})
  }

  updatePost(post: PostModel): Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(post);
    console.log(body);
    return this.http.put<PostModel>(`${this.url}/${post.id}`, body, {'headers': headers})
  }

  getTags(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.url}`);
  }

  getMostRecentPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://mi-primera-furgo-api.herokuapp.com/api/mostRecentPosts`);
  }

  deleteTag( id: number ) : Observable<{}>{
    return this.http.delete<{}>(`${this.url}/${id}`);
  }
  
}
