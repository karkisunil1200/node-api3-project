const User = require('../users/userDb');
const Post = require('../posts/postDb');

function validateUserId(req, res, next) {
  const {id} = req.params;

  User.getById(id)
    .then(user => {
      if (user) {
        next();
      } else {
        res.status(400).json({message: 'could not find the ID'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Something went wrong'});
    });
}

function validateUser(req, res, next) {
  const user = req.body;

  if (!user) {
    res.status(400).json({message: 'Missing user data'});
  } else if (!user.name) {
    res.status(400).json({message: 'missing required name field'});
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  const body = req.body;
  if (!body) {
    res.status(400).json({errorMessage: 'Missing post data'});
  } else if (!body.text) {
    res.status(400).json({errorMessage: 'Missing required text field'});
  } else {
    next();
  }
}

module.exports = {
  validateUserId,
  validateUser,
  validatePost
};
