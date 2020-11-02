import { Router } from 'express';
import PokemonsController from './controllers/PokemonsController';

const routes = Router();


routes.get('/pokemons', PokemonsController.index);
routes.get('/pokemons/:id', PokemonsController.show);
routes.post('/pokemons', PokemonsController.create);


export default routes;