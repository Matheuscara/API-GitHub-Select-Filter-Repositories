  
const { Router } = require('express');

// Services
const repositoriesServices = require('../services/repositoriesServices.js')

// Router
const route = Router();

// Get All Posts
route.get('/:user/:language?/:order?/:index?', repositoriesServices.getRepositories );

// Export Router
module.exports = route;