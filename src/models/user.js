"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // A user can have many products
      User.hasMany(models.Product, { foreignKey: "userId", as: "products" });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true, // Set the ID as primary key
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
