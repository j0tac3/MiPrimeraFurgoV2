import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtiquetaPostModel } from '../models/etiqeutaPost.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagPostService {
  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/etiquetasPost';

  constructor(private http: HttpClient) { }

  createEtiquetasPost(etiquetaPost: EtiquetaPostModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(etiquetaPost);
    console.log(body);
    return this.http.post<EtiquetaPostModel>(this.url, body, {'headers': headers});
  }

  getEtiquetasPost(): Observable<EtiquetaPostModel> {
    return this.http.get<EtiquetaPostModel>(`${this.url}`);
  }
}
