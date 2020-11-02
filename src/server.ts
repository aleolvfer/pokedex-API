import express from 'express';
import './database/connection'

const app = express();

app.use(express.json());

app.get('/pokemons', (request, response) => {
  console.log("adsadasdasd")
  return response.json( { message : "Hello World"})
});

app.listen(3333);