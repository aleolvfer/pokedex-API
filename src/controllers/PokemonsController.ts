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
    console.log(request, '111 ---')

    console.log(request.file, '13123123')

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
  console.log(image)
    await pokemonsRepository.save(pokemon);
    // com save ocorre error cyclic dependency "Image"
    
    // await pokemonsRepository.createQueryBuilder()
    //  .insert().into('pokemons') 
    //  .values​​(pokemon).execute(); 

    return response.status(201).json(pokemon)
  } 
}
  