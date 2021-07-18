const moment = require('moment');

repositoresModels = require('../models/repositoresModels')
formatLanguageFilter = require('../Util/formatLanguageFilter');

const getRepositories = async (req, res) => {
  let {
    user,
    language,
    order
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

    return res.status(200).json(diferent)
  }
};

module.exports = {
  getRepositories
};