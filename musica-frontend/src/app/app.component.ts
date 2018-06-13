import { Playlist } from './models/playlist.model';
import { MusicaService } from './musica.service';
import { Musica } from './models/musica.model';
import { Component } from '@angular/core';
import { PlaylistMusicas } from './models/playlistMusicas.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private musicasLista: Musica[];
  private playlist: Playlist;

  constructor(private musicaService: MusicaService) { }

  public buscarMusica(event: KeyboardEvent) {
    const filter = (<HTMLInputElement>event.target).value;

    this.musicaService.getMusicas(filter).subscribe((musicas) => {
      this.musicasLista = musicas;
    });
  }

  public buscarPlaylist(event: KeyboardEvent) {
    const filter = (<HTMLInputElement>event.target).value;

    this.musicaService.getPlaylist(filter).subscribe((playlist) => {
      this.playlist = playlist;
    });
  }

  public incluirMusicasPlaylist(event) {
    if (!this.playlist) {
      alert('Favor buscar uma playlist para incluir a(s) música(s) selecionada(s)!');
      return;
    }

    const selectedMusics: Musica[] = this.musicasLista.filter(musica => musica.checked );

    this.musicaService.setMusicasPlaylist(selectedMusics, this.playlist.id).subscribe((response) => {
      alert('Musica incluida com sucesso!!');

      selectedMusics.forEach(item => {
        this.playlist.playlistMusicas.push(new PlaylistMusicas(item, item.id, ''));
      });
    });
  }

  public removerMusicasPlaylist(event) {
    const selectedMusic = this.playlist.playlistMusicas.filter(item => item.musica.checked);

    this.musicaService.deleteMusicasPlaylist(selectedMusic[0].musica.id, this.playlist.id).subscribe((response) => {
      alert('Music removed successfully!!');
    });
  }
}




