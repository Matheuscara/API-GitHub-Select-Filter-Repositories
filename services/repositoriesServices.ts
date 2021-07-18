// const repositoresModels = require('../models/repositoresModels.ts');

// CREATE POST
const getRepositories = async (req, res) => {
    // const { title, subtitle, text, imageLink } = req.body;  
    // const titleInServer = await repositoresModels.findAll(title);
  
    // if (titleInServer !== null) {
    //   return res.status(422).json({ message : "Post Exist"});
    // }
  
    // const result = await repositoresModels.createPost(title, subtitle, text, imageLink);
    // return res.status(200).json(result);
    return res.status(200).json();
};

  module.exports = {getRepositories}