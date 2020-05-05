import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { PokemonSideComponent } from './components/pokemon-side/pokemon-side.component';
import { PokemonSideBarComponent } from './components/pokemon-side-bar/pokemon-side-bar.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailComponent,
    SearchPipe,
    PokemonSideComponent,
    PokemonSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
