import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { VerMasComponent } from '../ver-mas/ver-mas.component';
import { HacerPedidoComponent } from '../hacer-pedido/hacer-pedido.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'verMas',     component: VerMasComponent },
  {path: 'hacerPedido', component:HacerPedidoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];