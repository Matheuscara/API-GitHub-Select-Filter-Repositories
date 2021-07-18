const axios = require("axios");

// AXIOS CONFIG
const axiosConfig = (user) => {
  return axios({
    method: "get",
    url: `https://api.github.com/users/${user}/repos`,
  });
};

// GET REPOSITORIES
const getAll = async (user) => {
  return axiosConfig(user).then((response) => {
    return response
  })
};

// EXPORT MODELS FUNCTIONS
module.exports = {
  getAll,
};
