"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Music extends Model {}

  Music.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      url: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      image: {
        type: DataTypes.STRING
      },
      artistname: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "user"
    }
  );

  Music.associate = models => {
    models.Music.belongsTo(models.Post);
  };
  return Music;
};
