import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MusicResults } from '../interfaces/music-search-result.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private musicUrl: string = environment.musicUrl;

  constructor(protected http: HttpClient) { }

  public searchMusic(key: string): Observable<MusicResults> {
    return this.http.get<MusicResults>(
      this.musicUrl + '/search?term=' + key,
    );
  }
}
