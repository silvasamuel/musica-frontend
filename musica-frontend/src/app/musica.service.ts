
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Musica } from './models/musica.model';
import { Playlist } from './models/playlist.model';
import { $ } from 'protractor';

const API_URL = 'https://intense-ocean-93206.herokuapp.com';

@Injectable()
export class MusicaService {

  constructor(private http: Http) {
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public getMusicas(musica): Observable<Musica[]>  {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const options = new RequestOptions({ headers: headers });

    // will use this.http.get()
    return this.http
    .get(`${API_URL}/api/musicas/?filtro=${musica}`)
    .map(response => {
      return response.json();
    })
    .catch(this.handleError);
  }

  public getPlaylist(usuario): Observable<Playlist> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const options = new RequestOptions({ headers: headers });

    // will use this.http.get()
    return this.http
    .get(`${API_URL}/api/playlists/?user=${usuario}`)
    .map(response => {
      return response.json();
    })
    .catch(this.handleError);
  }

  public setMusicasPlaylist(musicas: Musica[], playlistId) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${API_URL}/api/playlists/${playlistId}/musicas`, musicas)
    .map(response => {
      return response;
    })
    .catch(this.handleError);
  }

  public deleteMusicasPlaylist(musica: String, playlistId) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const options = new RequestOptions({ headers: headers });

    return this.http.delete(`${API_URL}/api/playlists/${playlistId}/musicas/${musica}`)
    .map(response => {
      return response;
    })
    .catch(this.handleError);
  }

}
