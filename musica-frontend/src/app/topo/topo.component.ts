import { Component, OnInit } from '@angular/core';
import { MusicaService } from './../musica.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
  }

  buscarMusica(musica:string){
    console.log(musica);
    this.musicaService.getMusicas(musica).subscribe((musicas) => {
      console.log(musicas);
    }
  );
  }

}
