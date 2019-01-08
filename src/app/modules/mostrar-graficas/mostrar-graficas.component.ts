import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Busqueda } from 'src/app/models/grafico.model';

@Component({
  selector: 'app-mostrar-graficas',
  templateUrl: './mostrar-graficas.component.html',
  styleUrls: ['./mostrar-graficas.component.css']
})
export class MostrarGraficasComponent implements OnInit, DoCheck {
  @Input() busqueda: Busqueda;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.busqueda);
  }

}
