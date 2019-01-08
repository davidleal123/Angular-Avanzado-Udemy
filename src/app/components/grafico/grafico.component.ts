import { Component, OnInit } from '@angular/core';
import { Busqueda, Empresa } from 'src/app/models/grafico.model';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  public empresas = [{ 'Id': 1, 'Nombre': 'walmart' },
  { 'Id': 2, 'Nombre': 'Costco' }];

  public busqueda: Busqueda;
  public selectedGraph: Boolean = false;
  public empresa: Empresa;
  constructor() { }

  ngOnInit() {
    this.empresa = new Empresa(0, 'TODOS');
    this.busqueda = new Busqueda(this.empresa);
  }


  onSubmit() {
    console.log({'Msg': 'it workss',
                  'Obj': this.busqueda});
    this.selectedGraph = true;
  }

}
