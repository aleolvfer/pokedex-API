import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Pokemon from '../models/Pokemon';
import pokemonView from '../views/pokemons_view'

export default {

  async delete(request: Request, response: Response) {
    const id = request.params;
    const pokemonsRepository = getRepository(Pokemon);
   
    const pokemon = await pokemonsRepository.findOneOrFail(id);
  
    await pokemonsRepository.remove(pokemon);
    return {message: "Pokemon Removido"};
  },

  async index ( request: Request, response: Response){
    const pokemonsRepository = getRepository(Pokemon); 

    const pokemons = await pokemonsRepository.find({
      relations: ['image']
    });
    return response.json(pokemonView.renderMany(pokemons));
  },

  async show ( request: Request, response: Response){
    const id = request.params;
    const pokemonsRepository = getRepository(Pokemon); 

    const pokemon = await pokemonsRepository.findOneOrFail(id, {
      relations: ['image']
    });
    return response.json(pokemonView.render(pokemon));
  },

  async create ( request:  Request, response: Response ) {

    const {
      name, 
      pokedex_number,
      generation,
      evolution_stage,
      cross_generation,
      type_one,
      type_two,
      attack,
      defense,
      stamina
    } = request.body;
  
    const pokemonsRepository = getRepository(Pokemon); 

    const image = { path: request.file.filename };
    
    const pokemon = pokemonsRepository.create({
      name,
      pokedex_number,
      generation,
      evolution_stage,
      cross_generation,
      type_one,
      type_two,
      attack,
      defense,
      stamina,
      image
    });

    await pokemonsRepository.save(pokemon);
    
    return response.status(201).json(pokemon)
  } 
}
