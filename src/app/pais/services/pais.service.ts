import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  getPais( query: string ): Observable<CountryResponse[]> {

    const url: string = `${this.apiUrl}/name/${query}`;

    return this.http.get<CountryResponse[]>(url);
  }
}
