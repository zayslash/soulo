const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../middlewares/authentication");
const { Post } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

router.get("/", (req, res) => {
  Post.findAll({}).then(posts => res.json(posts));
});

router.post("/", (req, res) => {
  Post.create({
    description: req.body.description,
    tag: req.body.tag,
    title: req.body.title,
    playlist: req.body.playlist,
    image: req.body.image,
    userId: req.body.id
  })
    .then(post => {
      res.status(201).json(post);
      console.log(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Post.findByPk(id).then(post => {
    if (!post) {
      return res.sendStatus(404);
    }

    res.json(post);
  });
});

router.put("/", (req, res) => {
  const id = req.body.userId;
  Post.findAll({
    where: {
      userId: id
    }
  }).then(post => {
    if (!post) {
      return res.sendStatus(404);
    }

    post.description = req.body.description;
    post.tag = req.body.tag;
    post.title = req.body.title;
    post.playlist = req.body.playlist;
    post
      .save()
      .then(post => {
        res.json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Post.findByPk(id).then(post => {
    if (!post) {
      return res.sendStatus(404);
    }

    post.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
