import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import echelonApiItems from './definitions/echelonApiItems';
import echelonApiResponse from './definitions/echelonApiResponse';

@Injectable({
  providedIn: 'root'
})
export class EchelonapiService {
  echelonData = new Subject<echelonApiItems[]>()
  filteredSelection = new Subject<string>()

  url: string = 'https://gist.githubusercontent.com/jasonbyrne/881459829d342a2ddd495165fb815c2d/raw/e0fb08e2fa2a8288a124b1a187b86ecba35d2cb9/echelon-videos-example.json'

  constructor(private http: HttpClient) { }

  public retrieveData(): Observable<echelonApiItems[]> {
    return this.http.get<echelonApiResponse>(this.url).pipe(
      pluck('items')
    )
  }

  public getEchelonData(): Observable<echelonApiItems[]> {
    return this.echelonData.asObservable();
  }

  public updateEchelonData(itemData: echelonApiItems[]): void {
    return this.echelonData.next(itemData)
  }

  public getFilteredSelection(): Observable<string> {
    return this.filteredSelection.asObservable()
  }

  public updateFilteredSelection(selection: string | undefined): void {
    return this.filteredSelection.next(selection)
  }

  public resetDatatState(itemData: echelonApiItems[]) {
    this.updateFilteredSelection(undefined)
    this.updateEchelonData(itemData)
  }
}
