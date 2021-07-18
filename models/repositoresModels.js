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
    return response.data.map((repo) => {
      return {
        name: repo.full_name,
        url: repo.html_url,
        avatar: repo.owner.avatar_url,
        description: repo.description,
        language: repo.language,
        created: repo.created_at
      }
    }) 
  })
};

// EXPORT MODELS FUNCTIONS
module.exports = {
  getAll,
};
