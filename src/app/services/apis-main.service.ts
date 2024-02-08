import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IApisMain} from '@models/apis.model';

@Injectable({
  providedIn: 'root',
})
export class ApisMainService {
  private readonly BASE_URL: string = 'https://api.publicapis.org/';

  constructor(private http: HttpClient) {}

  public getApiEntries(): Observable<IApisMain> {
    return this.http.get<IApisMain>(`${this.BASE_URL}\entries`);
  }
}
