import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map, Observable} from 'rxjs';

import {Countries, ICountry} from '@models/countries.model';

@Injectable({
  providedIn: 'root',
})
export class CountiesApiService {
  private readonly BASE_URL: string = 'https://countriesnow.space/api/v0.1/';

  constructor(private http: HttpClient) {
  }

  public getCountries(): Observable<ICountry[]> {
    return this.http.get<Countries>(`${this.BASE_URL}countries`).pipe(
      filter((countriesData: Countries) => Boolean(countriesData)),
      map((countriesData: Countries): ICountry[] => countriesData.data),
    );
  }
}
