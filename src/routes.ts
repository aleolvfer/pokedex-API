import { Router } from 'express';
import PokemonsController from './controllers/PokemonsController';

const routes = Router();

routes.post('/pokemons', PokemonsController.create);

export default routes;