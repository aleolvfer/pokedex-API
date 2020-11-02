import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Pokemon from '../models/Pokemon';

export default {
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
  