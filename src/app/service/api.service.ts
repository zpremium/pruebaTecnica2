import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://swapi.dev/api/';
  }

  getStarships() {
    return this.http.get(this.url + 'starships/');
  }
}
