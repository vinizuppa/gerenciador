import { Observable, catchError, throwError } from 'rxjs';
import { UsuarioRequest, UsuarioResponse, UsuarioUpdateRequest } from './../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  usuario!: UsuarioResponse;
  usuarioUpdateRequest!: UsuarioUpdateRequest;

  constructor(private http: HttpClient) { }

  novoUsuario(usuario: UsuarioRequest) {
    console.log(usuario);
    return this.http.post(`${environment.apiUrl}/usuarios/registro`, usuario);
  }

  getAll(): Observable<any> {

    return this.http.get(`${environment.apiUrl}/usuarios`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllAtivos(): Observable<any> {

    return this.http.get(`${environment.apiUrl}/usuarios?clienteStatus=ATIVO`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllInativos(): Observable<any> {

    return this.http.get(`${environment.apiUrl}/usuarios?clienteStatus=INATIVO`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findById(id:number): Observable<any> {

    return this.http.get(`${environment.apiUrl}/usuarios/id/` + id)
    .pipe(
      catchError(this.errorHandler)
    )

  }

  findByDocumento(documento:string): Observable<any> {

    return this.http.get(`${environment.apiUrl}/usuarios/documento/` +documento)
    .pipe(
      catchError(this.errorHandler)
    )

  }

  update(id:number, usuario:UsuarioUpdateRequest): Observable<any> {

    return this.http.put(`${environment.apiUrl}/usuarios/` + id, usuario)
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
