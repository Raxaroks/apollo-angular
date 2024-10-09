import { Routes } from '@angular/router';
import { ListComponent } from '@pokemon/screens';
import { ArticleComponent } from './pokemon/screens/article/article.component';

export const routes: Routes = [
  { 
    path: 'pokedex', 
    component: ListComponent, 
    title: "PokéDex",
  },{ 
    path: 'pokedex/:id', 
    component: ArticleComponent, 
    title: "Search a pokemon" 
  },
  {
    path: "",
    redirectTo: "/pokedex",
    pathMatch: "full"
  }
];
