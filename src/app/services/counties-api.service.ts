import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountiesApiService {
  private readonly BASE_URL: string = 'https://countriesnow.space/api/v0.1/';

  constructor(private http: HttpClient) {
  }

  public getCountries(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}countries`);
  }
}
