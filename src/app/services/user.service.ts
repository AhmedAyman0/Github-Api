import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base = 'https://api.github.com/users';
  baseSearch='https://api.github.com/search/users';
  baseRepo='https://api.github.com/users/';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.base);
  }
  loadPage(perPage,lastId){
    return this.http.get(this.base+`?per_page=${perPage}&since=${lastId}`);
  }
  searchPage(search,perPage,page){
    console.log(this.base+`?q=${search}&per_page=${perPage}`);
    return this.http.get(this.baseSearch+`?q=${search}&per_page=${perPage}&page=${page}`);
  }
  getUSerByName(name){
    return this.http.get(this.base+`/${name}`)
  }
  getReposPage(name,page){
    return this.http.get(this.baseRepo+`${name}/repos?per_page=5&page=${page}`);

  }
}
