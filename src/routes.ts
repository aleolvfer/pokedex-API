import { Router } from 'express';
import PokemonsController from './controllers/PokemonsController';

import uploadConfig from './config/upload';
import multer from 'multer';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/pokemons', PokemonsController.index);
routes.get('/pokemons/:id', PokemonsController.show);
routes.post('/pokemons', upload.single('image'), PokemonsController.create);

export default routes;