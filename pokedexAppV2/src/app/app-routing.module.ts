import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: '', component: PokemonComponent, pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
