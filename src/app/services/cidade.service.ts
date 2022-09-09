import { Injectable } from '@angular/core';
import { CidadeRequest, CidadeResponse } from './../models/cidade';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, observable, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  cidade!: CidadeResponse;
  constructor(private http: HttpClient) { }

  novaCidade(cidade: CidadeRequest) {
    console.log(cidade);
    return this.http.post(`${environment.apiUrl}/cidades/registro`, cidade);
  }

  getAll(): Observable<any> {

    return this.http.get(`${environment.apiUrl}/cidades`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {

    return this.http.get(`${environment.apiUrl}/cidades/id/` + id)
    .pipe(
      catchError(this.errorHandler)
    )

  }

  update(id:number, cidade:CidadeRequest): Observable<any> {

    return this.http.put(`${environment.apiUrl}/cidades/` + id, cidade)
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
