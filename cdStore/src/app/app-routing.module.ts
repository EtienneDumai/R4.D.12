import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcdComponent } from './list-cd/list-cd.component';
import { HomeComponent } from './home/home.component';
import { CDComponent } from './cd/cd.component';
import { NewCDComponent } from './new-cd/new-cd.component';

const routes: Routes = [
  { path: '', component:HomeComponent }, // Redirection vers la liste des CD par défaut
  { path: 'catalog', component: ListcdComponent }, // Route pour afficher les CD
  { path: 'cd/:id', component: CDComponent }, // Route pour afficher un CD
  { path: 'createcd', component: NewCDComponent }, // Route pour créer un CD
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
