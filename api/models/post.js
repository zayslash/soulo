"use strict";
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      playlist: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      tag: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "post"
    }
  );

  Post.associate = models => {
    // models.Post.hasMany(models.Music);
  };
  return Post;
};
