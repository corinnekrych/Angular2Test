import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pony } from  '../model/pony';

@Injectable()
export class PoniesService {
  constructor(private http: Http) {
  }

  list() {
    return this.http.get('/api/ponies');
  }
}
