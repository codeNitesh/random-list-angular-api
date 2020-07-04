import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  private url = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb"

  getUsers(){
    return this.http.get(this.url)
  }
  
}
