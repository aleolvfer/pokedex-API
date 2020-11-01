import express from 'express';

const app = express();

app.use(express.json());

app.get('/pokemons', (request, response) => {
  return response.json( { message : "Hello World"})
});

app.listen(3333);