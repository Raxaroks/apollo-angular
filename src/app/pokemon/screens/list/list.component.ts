import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonGraphqlService } from '@app/pokemon/services';
import { PokemonV2Pokemon as Pokemon } from '@app/shared/typings/models';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  loading = true;
  _pkmns = signal<Pokemon[]>([]);

  pokegql = inject(PokemonGraphqlService);


  set pkmns(data: Pokemon[]) {
    this._pkmns.update(current => [ ...current, ...data]);
  }
  get pkmns() {
    return this._pkmns();
  }

  ngOnInit() {
    this.pokegql.fetchPokemons().subscribe(({ data, loading }) => {
      this.pkmns = data;
      this.loading = loading;
    });
  }

}
