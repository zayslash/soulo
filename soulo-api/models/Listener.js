'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Listener extends Model {}

  Listener.init({
    full_name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 30],
        notEmpty: true,
      }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            len: [6, 30],
            notEmpty: true,
        }
    },
  }, {
    sequelize,
    modelName: 'listener'
  });

  Listener.associate = (models) => {
    // associations can be defined here
  };

  return Listener;
};