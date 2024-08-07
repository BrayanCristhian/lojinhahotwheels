import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [
  {path:'',redirectTo:'catalogo',pathMatch:'full'},
  {path:'catalogo',component:CatalogoComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
