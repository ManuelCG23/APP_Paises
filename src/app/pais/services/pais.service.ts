import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2'

  get darParametros(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, {params:this.darParametros});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.darParametros});
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(reg: string): Observable<Country[]>{
    const url = `${this.apiURL}/region/${reg}`;
    return this.http.get<Country[]>(url,{params:this.darParametros});
  }






}
