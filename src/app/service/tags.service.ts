import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtiquetaModel } from '../models/etiqueta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/etiqueta';

  constructor(private http: HttpClient) { }

  createTag( tag: EtiquetaModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(tag);
    return this.http.post<EtiquetaModel>(this.url, body, {'headers': headers});
  }

  updateTag( tag: EtiquetaModel): Observable<EtiquetaModel> {
    return this.http.put<EtiquetaModel>(`${this.url}/${tag.id}`, tag);
  }

  getTags(): Observable<EtiquetaModel[]> {
    return this.http.get<EtiquetaModel[]>(`${this.url}`);
  }

  private createArray( tagObj: Object) {
    const tags: EtiquetaModel[] = [];
    
    if (tagObj === null ) { return []; }

    Object.keys( tagObj ).forEach( key => {
      const tag: EtiquetaModel = tagObj[key];
      tags.push( tag );
    });

    return tags;
  }

  deleteTag(tag: EtiquetaModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(tag.id);
    return this.http.delete<EtiquetaModel>(`${this.url}/${tag.id}`, {'headers': headers})
  }
}
