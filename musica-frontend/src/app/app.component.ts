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

  public musicasLista: Musica[]

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
    console.log(this.musicasLista);
  }
    

  public buscarMusica(event){
    console.log(event);
    if(event.keyCode == 13){

      console.log(event.target.value);
        let filter = event.target.value;

        this.musicaService.getMusicas(filter).subscribe((musicas) => {
          this.musicasLista = musicas;
          console.log(musicas);
        }
      );
    }
  }
}




