import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path:'listado',
    component:ListadoComponent
  },
  {
    path:'',
    component:ListadoComponent
  },
  {
    path:'detalle/:id',
    component:DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
