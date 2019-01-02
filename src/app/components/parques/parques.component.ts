import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() nombre: string;
  @Input() metros: number;
  public vegetacion: string;
  public abierto: boolean;
  @Output() pasameLosDatos = new EventEmitter();
  constructor() {
    this.metros = 450;
    this.nombre = 'Parque natural para caballos';
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log('Do check');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngOnDestroy(){
    console.log('Adios componente')
  }
  emitirEvento() {
    this.pasameLosDatos.emit({
      'metros': this.metros,
      'nombre': this.nombre,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto
    });
  }

}
