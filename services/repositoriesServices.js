const moment = require('moment');
repositoresModels = require('../models/repositoresModels')
formatLanguageFilter = require('../Util/formatLanguageFilter');

const getRepositories = async (req, res) => {
  let {
    user,
    language,
    order,
    index
  } = req.params;

  // REQUEST ALL REPOSITORIES
  let repositories = await repositoresModels.getAll(user);

  repositories.map((element) => {
    console.log(element.language)
  })

  // FILTER LANGUAGE SELECTED
  if (language) {
    language = formatLanguageFilter(language);
    repositories = repositories.filter(
      (repositorie) => repositorie.language === language 
    );
  }

  // ADD ORDER GROWING
  if (order) {
    repositories = repositories.sort((x, y) => {
      const A = moment(x.created)
      const B = moment(y.created)
      return B.isBefore(A) ? 1 : -1
    });
  }

  // INDEX REPOSITORIE SELECTED
  if (index) {
    return index < diferent.length ? res.status(200).json(diferent[index]) : res.status(400).json({
      "message": "Repositorio Inexistente"
    })
  }

  // RETURN REPOSITORIES
  return repositories || user ? res.status(200).json(repositories) : res.status(400).json({
    "message": "Valores Invalidos ou Inexistentes"
  })

};

module.exports = {
  getRepositories
};