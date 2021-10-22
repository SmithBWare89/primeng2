import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EchelonapiService {
  url: string = 'https://gist.githubusercontent.com/jasonbyrne/881459829d342a2ddd495165fb815c2d/raw/e0fb08e2fa2a8288a124b1a187b86ecba35d2cb9/echelon-videos-example.json'

  constructor( private http: HttpClient) { }

  public retrieveData(): any {
    return this.http.get(this.url)
  }
}