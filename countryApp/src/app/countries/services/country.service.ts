import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrlByCapital = 'https://restcountries.com/v3.1/capital/';
  private apiUrlByAlphaCode = 'https://restcountries.com/v3.1/alpha/';
  private apiUrlByRegion = 'https://restcountries.com/v3.1/region/';
  private apiUrlByCountry = 'https://restcountries.com/v3.1/name/'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  getByCountry(country: string): Observable<any> {
    return this.httpClient.get(this.apiUrlByCountry + country)
  }

  getByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrlByCapital}/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const url = `${this.apiUrlByAlphaCode}${code}`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)) // cuidado con la importación de map en `rxjs`
      );
  }

  getByRegion(region: string): Observable<any> {
    return this.httpClient.get(this.apiUrlByRegion + region)
  }

}
