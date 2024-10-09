import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonGraphqlService } from '@app/pokemon/services';
import { PokemonV2Pokemon as Pokemon } from '@app/shared/typings/models';
import { firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  private _pkmn = signal<Pokemon | undefined>(undefined)

  set pkmn(data: Pokemon) {
    this._pkmn.set(data);
  }

  get pkmn(): Pokemon | undefined {
    return this._pkmn()
  }

  private pokegql = inject(PokemonGraphqlService)
  private activatedRoute = inject(ActivatedRoute);

  listenParams() {
    return this.activatedRoute.params
      .pipe( map(params => params["id"]) )
  }

  async fetchPokemon(id: number) {
    try {
      const fetchById$ = this.pokegql.fetchPokemonByDexId(id)
      const { data, loading } = await firstValueFrom(fetchById$);
      this.pkmn = data;
    } catch (error) {
      console.warn(error);
    }    
  }

  ngOnInit() {
    this.listenParams().subscribe( async id => {
      // TODO: llamar la query para conseguir un pokemon por id y pintarlo en pantalla
      await this.fetchPokemon(id)
    })
  }
}
