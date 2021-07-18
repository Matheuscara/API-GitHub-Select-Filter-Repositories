// Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Controller
const repositoriesController = require('./controllers/repositoriesController.js')

// Configurate Server
const DOOR = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(bodyParser.json());

// ROUTE TO GET REPOSITORES
app.use('/repositories', repositoriesController);

// LSITEN DOOR
app.listen(DOOR, () => {
  console.log(`Server Rodando ${DOOR} `)
})