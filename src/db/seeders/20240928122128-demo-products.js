"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Laptop Lenovo Ideapad",
        description: "Description for Product 1",
        userId: "ASP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MacBook Air",
        description: "Description for Product 2",
        userId: "BJO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MacBook Pro",
        description: "Description for Product 3",
        userId: "CDA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "iPhone 13",
        description: "The best phone ever",
        userId: "CDA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "iPhone 13 Pro",
        description: "Powerful phone with 5G",
        userId: "ASP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "iPhone 13 Pro Max",
        description: "This is the best phone ever",
        userId: "CDA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "iPhone 13 Mini",
        description: "Smartphone with 6.1-inch display",
        userId: "CDA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samsung Galaxy S22",
        description: "Real phone with 5G",
        userId: "BJO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
