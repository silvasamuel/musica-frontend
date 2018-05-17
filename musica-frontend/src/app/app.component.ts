import { Playlist } from './models/playlist.model';
import { MusicaService } from './musica.service';
import { Musica } from './models/musica.model';
import { Component } from '@angular/core';


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
      console.log(musicas);
    });
  }

  public buscarPlaylist(event: KeyboardEvent) {
    const filter = (<HTMLInputElement>event.target).value;

    this.musicaService.getPlaylist(filter).subscribe((playlist) => {
      this.playlist = playlist;
      console.log(this.playlist);
    });
  }

  public incluirMusicasPlaylist(event) {
    const selectedMusics: Musica[] = this.musicasLista.filter(musica => musica.checked );

    console.log(selectedMusics);

    this.musicaService.setMusicasPlaylist(selectedMusics, this.playlist.id).subscribe((response) => {
      console.log(response);
    });
  }

  public removerMusicasPlaylist(event) {
    // tslint:disable-next-line:prefer-const
    let selectedMusics: Musica[];

    // this.playlist.playlistMusicas.forEach(object => {
    //   if (object.musica.checked) {
    //     selectedMusics.push(object);
    //   }
    // });

    // const selectedMusics = this.playlist.playlistMusicas.filter(musica => {
    //   if (musica.checked) {
    //     return musica;
    //   }
    // });

    console.log(selectedMusics);

    // this.musicaService.setMusicasPlaylist(selectedMusics, this.playlist.id).subscribe((response) => {
    //   console.log(response);
    // });
  }
}




