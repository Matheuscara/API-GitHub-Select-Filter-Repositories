// Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Controller
const repositoriesController = require('./controllers/repositoriesController.js')

// Configurate Server
const DOOR = 3000;

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/repositories', repositoriesController);

app.listen(DOOR, () => {
  console.log(`Server Rodando ${DOOR} `)
})