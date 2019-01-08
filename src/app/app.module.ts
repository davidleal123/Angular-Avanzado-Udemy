import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { GuardarEmailComponent } from './modules/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './modules/mostrar-email/mostrar-email.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { MostrarGraficasComponent } from './modules/mostrar-graficas/mostrar-graficas.component';
import { GraphsComponent } from './components/graphs/graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    HomeComponent,
    ContactComponent,
    KeeperComponent,
    GuardarEmailComponent,
    MostrarEmailComponent,
    GraficoComponent,
    MostrarGraficasComponent
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EditorModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatButtonModule,
  ],
  providers: [], // Servicios de manera Global
  bootstrap: [AppComponent]
})
export class AppModule { }
