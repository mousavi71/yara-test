import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) { }
  private apiURL = 'https://jsonplaceholder.typicode.com/';
// get all posts
  getPosts(): Observable<any> {
    return this.httpClient.get(this.apiURL + 'posts');
  }
// get specific post by id
  getPostById(id: string): Observable<any> {
    return this.httpClient.get(this.apiURL + 'posts/' + id);
  }
}
