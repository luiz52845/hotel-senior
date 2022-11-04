import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponsePageable } from './model/responsePageable.model'
import { Hospede } from './model/hospede.model';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = '/api/hospede'
  apiPut = '/api/hospede/hospede'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };



  constructor(private httpClient: HttpClient) { }

  public getList(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

  public postPessoa(hospede: any): Observable<Hospede> {
    return this.httpClient.post<any>(this.apiPut, hospede, this.httpOptions);

  }

}


