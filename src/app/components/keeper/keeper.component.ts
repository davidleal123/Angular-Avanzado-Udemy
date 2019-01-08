import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../../../services/excel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { single, multi } from './data';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  providers: [ExcelService]
})
export class KeeperComponent implements OnInit {
  fileList: FileList;
  errorMessage: any;
  // charts
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Compañia';
  showYAxisLabel = true;
  yAxisLabel = 'Ventas';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private _excelService: ExcelService, private _route: ActivatedRoute, private _router: Router) {
    Object.assign(this, { single, multi });
   }

  ngOnInit() {
  }

  fileChange(event) {
    this.fileList = event.target.files;
    console.log(this.fileList);
  }


  emitirEvento() {
    if (this.fileList.length > 0) {
      this._excelService.postProducto(this.fileList).subscribe(
        response => {
          console.log(response);
          if (!response) {
            alert('Error con el servidor');
          } else {
            console.log('todo bien');
            this._router.navigate(['/Productos']);
            alert('Producto dado de alta');
          }
        },
        error => {
          this.errorMessage = <any>error;

          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('error en la peticion');
          }
        }

      );
    }
  }

  onSelect(event) {
    console.log(event);
  }

}
