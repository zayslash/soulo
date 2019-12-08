"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 15],
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 15],
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [6, 30],
          notEmpty: true,
          isEmail: true
        }
      },
      passwordHash: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.VIRTUAL,
        validate: {
          isLongEnough: function(val) {
            if (val.length < 7) {
              throw new Error("Please choose  a longer password");
            }
          }
        }
      },
      tags: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "user"
    }
  );

  User.associate = models => {
    // models.User.hasMany(User);
  };

  User.beforeSave((user, options) => {
    user.passwordHash = bcrypt.hashSync(user.password, 10);
  });

  return User;
};
