import { GraphQLObservableResult, PokemonV2Pokemon } from '@typings/models';


export type FetchPokemonsGQLResult = { pokemon_v2_pokemon: PokemonV2Pokemon[] };
export type FetchPokemonByIdGQLResult = { pokemon_v2_pokemon_by_pk: PokemonV2Pokemon };

export type FetchPokemonsGQLResultMapped = GraphQLObservableResult<PokemonV2Pokemon[]>
export type FetchPokemonByIdGQLResultMapped = GraphQLObservableResult<PokemonV2Pokemon>