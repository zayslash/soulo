'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 15],
        notEmpty: true,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 15],
        notEmpty: true,
      }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [6, 30],
            notEmpty: true,
            isEmail: true,
        }
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: function(val) {
          if (val.length < 7) {
              throw new Error("Please choose  a longer password");
          }
        }
      },
    },
    // follows: {
    //   type: DataTypes.User,
    // },
    // follewers: {
    //   type: DataTypes.User,
    // },
    // recents: {
    //   type: DataTypes.User,
    // },
    tags: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
  };

  User.beforeSave((user, options) => {
    if(user.recentspassword) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};