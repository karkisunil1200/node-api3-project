const express = require('express');
const db = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  db.get()
    .then(posts => {
      if (posts) {
        res.status(201).json(posts);
      } else {
        res.status(404).json({message: 'Something went wrong getting the posts'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch posts'});
    });
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
