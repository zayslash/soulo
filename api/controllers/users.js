const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../middlewares/authentication");
const { User } = db;

router.get("/", (req, res) => {
  User.findAll({}).then(user => res.json(user));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findByPk(id).then(user => {
    if (!user) {
      return res.sendStatus(404);
    }
    user
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  User.findByPk(id).then(post => {
    if (!post) {
      return res.sendStatus(404);
    }

    post.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
