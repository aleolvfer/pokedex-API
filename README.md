### :toolbox: Tecnologias

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/pt-br/)

- [SQLite](https://www.sqlite.org/index.html)


### Instalação

Tenha instalado em sua maquina o Git e Node.js 10.0.0 (ou superior). Caso prefira, instale o Yarn.


1. Faça um clone ou o download do repositório.
2. Depois de obter sua cópia local, instale suas dependências:
```
yarn
```
ou
```
npm install
```

### Execução

Após a instalação, você podera executar a aplicação em modo de desenvolvimento:
```
yarn dev
```
ou
```
npm run dev
```
*Isso iniciará o servidor em **localhost:3333***

Para listar os pokemons cadastrados faça uma requisição GET para http://localhost:3333/pokemons.

Para listar apenas um pokemon faça uma requisição GET para http://localhost:3333/pokemons/1 passando o id do pokemon.
