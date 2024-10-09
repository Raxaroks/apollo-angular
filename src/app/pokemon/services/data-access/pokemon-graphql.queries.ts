import { gql } from 'apollo-angular';

export const GET_POKEMONS = gql`
query Pokemon_v2_pokemon($limit: Int!) {
  pokemon_v2_pokemon(limit: $limit) {
    base_experience
    height
    id
    is_default
    name
    order
    pokemon_species_id
    weight
  }
}`;

export const GET_POKEMON_BY_ID = gql`
query Pokemon_v2_pokemon_by_pk($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
        base_experience
        height
        id
        is_default
        name
        order
        pokemon_species_id
        weight
    }
}`;
