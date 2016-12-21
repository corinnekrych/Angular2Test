import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pony } from  '../model/pony';
import { Observable } from 'rxjs'
@Injectable()
export class PoniesService {
  public ponies: Array<Pony>;
  constructor(private http: Http) {
  }

  list(): Observable<Array<Pony>> {
    return this.http.get('http://localhost:8001/ponies')
                    .map(res => res.json())
                    .catch(this.handleError);
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
