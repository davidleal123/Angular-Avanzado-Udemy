import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreParque;
  public miParque;
  constructor() {
    this.titulo = 'Esta es la tienda';
  }

  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function () {
      console.log('click desde jq');
      $('#textojq').removeClass('hidden').slideToggle();
    });
    $('#caja').dotdotdot();
  }


  mostrarNombre() {
    console.log(this.nombreParque);
  }

  verDatosParque(event) {
    console.log(event);
    this.miParque = event;
  }

}
