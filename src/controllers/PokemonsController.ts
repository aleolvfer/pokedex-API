import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Pokemon from '../models/Pokemon';
import pokemonView from '../views/pokemons_view'

import * as Yup from 'yup'

export default {

  async delete(request: Request, response: Response) {
    const id = request.params;
    const pokemonsRepository = getRepository(Pokemon);
   
    const pokemon = await pokemonsRepository.findOneOrFail(id, {
      relations:['image']
    });
    await pokemonsRepository.remove(pokemon);

    return response.json({message: "Pokemon Removido"});
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
    
    const data = {
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
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      pokedex_number: Yup.number().required(),
      generation: Yup.number().required(),
      evolution_stage: Yup.number().required(),
      cross_generation: Yup.boolean().required(),
      type_one: Yup.string().required(),
      type_two: Yup.string().required(),
      attack: Yup.number().required(),
      defense: Yup.number().required(),
      stamina: Yup.number().required(),
      image: Yup.object().required().shape({
        path: Yup.string().required()
      })
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const pokemon = pokemonsRepository.create(data);

    await pokemonsRepository.save(pokemon);
    
    return response.status(201).json(pokemon)
  } 
}
