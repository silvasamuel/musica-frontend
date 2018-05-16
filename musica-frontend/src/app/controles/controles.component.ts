import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {
  @Output() controleIncluirMusica = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
