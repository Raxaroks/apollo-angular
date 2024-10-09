import { Injectable } from "@angular/core"
import { Apollo } from "apollo-angular"
import { map, Observable } from 'rxjs';
import { FetchPokemonByIdGQLResult, FetchPokemonByIdGQLResultMapped, FetchPokemonsGQLResult, FetchPokemonsGQLResultMapped, GET_POKEMON_BY_ID, GET_POKEMONS } from './data-access';


@Injectable({
	providedIn: "root",
})
export class PokemonGraphqlService {
	constructor(private readonly apollo: Apollo) {}

	fetchPokemons(limit: number = 151): Observable<FetchPokemonsGQLResultMapped> {
		return this.apollo.watchQuery<FetchPokemonsGQLResult>({
			query: GET_POKEMONS,
      variables: { limit }
		}).valueChanges
      .pipe( 
        map(({ loading, data }) => ({
          loading,
          data: data.pokemon_v2_pokemon
            .map( ({ __typename, ...rest }) => rest )
        })) 
      );
	}

  fetchPokemonByDexId(dexId: number): Observable<FetchPokemonByIdGQLResultMapped> {
    return this.apollo.watchQuery<FetchPokemonByIdGQLResult>({
      query: GET_POKEMON_BY_ID,
      variables: { id: dexId }
    }).valueChanges
      .pipe(
        map(({ data, loading }) => ({
          loading,
          data: data.pokemon_v2_pokemon_by_pk
        }))
      )
  }
}
