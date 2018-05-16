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

  private musicasLista: Musica[]
  private playlist: Playlist

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
    console.log(this.musicasLista);
  }
    

  public buscarMusica(event){
    if(event.keyCode == 13){

        let filter = event.target.value;

        this.musicaService.getMusicas(filter).subscribe((musicas) => {
          this.musicasLista = musicas;
          console.log(musicas);
        }
      );
    }
  }

  public buscarPlaylist(event){
    if(event.keyCode == 13){

        let filter = event.target.value;

        this.musicaService.getPlaylist(filter).subscribe((playlist) => {
          this.playlist = playlist;
          console.log(playlist);
        }
      );
    }
  }

  public incluirMusicasPlaylist(event) {
    console.log(this.musicasLista);
  }

  public removerMusicasPlaylist(event) {
    console.log(this.musicasLista);
  }
}




