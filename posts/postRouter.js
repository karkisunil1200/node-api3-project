const express = require('express');
const db = require('./postDb');
const {validatePost} = require('../utils/validation');

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
  const id = req.params.id;

  db.get(id)
    .then(post => {
      if (post) {
        res.status(201).json(post);
      } else {
        res.status(404).json({message: 'Could not find the ID'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Could not get the post'});
    });
});

router.post('/', validatePost, (req, res) => {
  // do your magic!
  const post = req.body;

  db.insert(post)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      res.status(500).json({message: 'We could not find what you were looking for'});
    });
});

router.delete('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.remove(id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({message: 'The Id could not be found'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'post could not be deleted'});
    });
});

router.put('/:id', (req, res) => {
  // do your magic
  const id = req.params.id;
  const changes = req.body;

  db.update(id, changes)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({message: 'The Id could not be found'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'post could not be deleted'});
    });
});

module.exports = router;
