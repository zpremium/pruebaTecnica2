import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;
  naves: any;
  pages: number = 0;

  constructor(private http: HttpClient) {
    this.url = 'https://swapi.dev/api/';
  }

  getStarships() {
    this.pages = this.pages + 1;

    return this.http.get(this.url + 'starships/?page=' + this.pages);
  }

  // getStarships2() {
  //   return this.http.get(this.url + 'starships/?page=2');
  // }

  // getStarships3() {
  //   return this.http.get(this.url + 'starships/?page=3');
  // }

  // getStarships4() {
  //   return this.http.get(this.url + 'starships/?page=4');
  // }

  getStarshipByName(name: string): any {
    return this.naves.find((element: any) => element.name === name);
  }
}
