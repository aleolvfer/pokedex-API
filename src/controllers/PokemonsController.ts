import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Pokemon from '../models/Pokemon';

export default {

  async index ( request: Request, response: Response){
    const pokemonsRepository = getRepository(Pokemon); 

    const pokemons = await pokemonsRepository.find();
    return response.json(pokemons);
  },

  async show ( request: Request, response: Response){
    const id = request.params;
    const pokemonsRepository = getRepository(Pokemon); 

    const pokemon = await pokemonsRepository.findOneOrFail(id);
    return response.json(pokemon);
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
      stamina
    });
  
    await pokemonsRepository.save(pokemon);
  
    return response.status(201).json(pokemon)
  } 
}
  