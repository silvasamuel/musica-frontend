import { Musica } from './../models/musica.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  public checkMusic: Boolean;

  constructor() { }

  @Input() musicas: Musica[]

  ngOnInit() {
    console.log(this.musicas)
  }

  // set checkMusic(value){
  //   console.log(value);
  // }
}
