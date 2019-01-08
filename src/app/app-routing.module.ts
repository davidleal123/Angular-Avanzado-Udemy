import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { GraphsComponent } from './components/graphs/graphs.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Tienda', component: TiendaComponent },
  { path: 'Contacto', component: ContactComponent },
  { path: 'Animales', component: AnimalsComponent },
  { path: 'Cuidadores', component: KeeperComponent },
  {path: 'Graphs', component: GraphsComponent},

  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
