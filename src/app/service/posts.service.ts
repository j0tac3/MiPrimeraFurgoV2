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

  updatePost(postForm: FormGroup, post: PostModel): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const body = JSON.stringify(post);
    console.log(body);
    return this.http.put<PostModel>(`${this.url}/${post.id}`, body, {'headers': headers})
  }

  getTags(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.url}`);
  }

  deleteTag( id: number ) : Observable<{}>{
    return this.http.delete<{}>(`${this.url}/${id}`);
  }
  
  private crearPostFromBack(tagObj: Object){
    Object.keys( tagObj ).forEach( key => {
      const post: PostModel = tagObj[key];
      return post;
    });
  }

  private createArray( tagObj: Object) {
    const posts: PostModel[] = [];    
    if (tagObj === null ) { return []; }

    Object.keys( tagObj ).forEach( key => {
      const tag: PostModel = tagObj[key];
      posts.push( tag );
    });

    return posts;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
