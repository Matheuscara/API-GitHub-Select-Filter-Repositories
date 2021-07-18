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

  const repositories = await repositoresModels.getAll(user);

  if (language && order) {
    language = formatLanguageFilter(language);

    const repositoriesFilter = repositories.filter(
      (repositorie) => repositorie.language === language
    );

    const diferent = repositoriesFilter.sort((x, y) => {
      const A = moment(x.created)
      const B = moment(y.created)
      return B.isBefore(A) ? 1 : -1 
    });

    if(index) {
      return index < diferent.length ? res.status(200).json(diferent[index]) : res.status(400).json({"message": "Repositorio Inexistente"})
    }

    return res.status(200).json(diferent[0])
  }

  return repositories || user ? res.status(200).json(repositories) : res.status(400).json({"message": "Valores Invalidos ou Inexistentes"})

};

module.exports = {
  getRepositories
};