import Pokemon from '../models/Pokemon'
import ImagesView from './images_view'

export default {
  render(pokemon: Pokemon) {
    return {
      id: pokemon.id,
      name: pokemon.name,
      pokedex_number: pokemon.pokedex_number,
      generation: pokemon.generation,
      evolution_stage: pokemon.evolution_stage,
      cross_generation: pokemon.cross_generation,
      type_one: pokemon.type_one,
      type_two: pokemon.type_two,
      attack: pokemon.attack,
      defense: pokemon.defense,
      stamina: pokemon.stamina,
      image: ImagesView.render(pokemon.image)
    }
  },

  renderMany(pokemons: Pokemon[]) {
    return pokemons.map(pokemon => this.render(pokemon))
  }
};
