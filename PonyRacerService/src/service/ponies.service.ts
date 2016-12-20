import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pony } from  '../model/pony';

@Injectable()
export class PoniesService {
  constructor(private http: Http) {
  }

  list() {
    return [new Pony("Cincella", 4), new Pony("Mimi", 4)];
    //return this.http.get('/ponies');
  }
}
