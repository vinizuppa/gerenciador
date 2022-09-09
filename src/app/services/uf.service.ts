import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UfResponse } from './../models/uf';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor(private http: HttpClient) { }

  buscarTodos():  Observable<any>{
    return this.http.get(`${environment.apiUrl}/ufs`);
  }
}
