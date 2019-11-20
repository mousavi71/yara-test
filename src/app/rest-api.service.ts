import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) { }
  private apiURL = 'https://jsonplaceholder.typicode.com/';

  getPosts(): Observable<any> {
    return this.httpClient.get(this.apiURL + 'posts');
  }
}
