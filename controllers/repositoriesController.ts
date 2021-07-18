  
const { Router } = require('express');

// Services
const repositoriesServices = require('../services/repositoriesServices.ts')

// Router
const route = Router();

// Get All Posts
route.get('/', repositoriesServices.getRepositories );

// Export Router
module.exports = route;