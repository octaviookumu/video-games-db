import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FetchGamesService {
  constructor(private http: HttpClient) {}

  // the function will return an observable which is an APIResponse of type Game
  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search)
    }

    return this.http.get<APIResponse<Game>>()
  }
}
