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

    const repositoriesFilter = repositories.data.filter(
      (repositorie) => repositorie.language === language
    );

    const diferent = repositoriesFilter.sort((x, y) => {
      const A = moment(x.created_at)
      const B = moment(y.created_at)
      return B.isBefore(A) ? 1 : -1 
    });

    return res.status(200).json(diferent)
  }
};

module.exports = {
  getRepositories
};