import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoEditComponent } from './components/produto-edit/produto-edit.component';

export const routes: Routes = [
  { path: '', component: ProdutoListComponent }, // Rota padrão
  { path: 'cadastrar', component: ProdutoFormComponent },
  { path: 'editar/:id', component: ProdutoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }