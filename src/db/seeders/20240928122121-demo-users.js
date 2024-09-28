"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: "ASP",
        firstName: "Andi",
        lastName: "Saputra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "BJO",
        firstName: "Bob",
        lastName: "Jono",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CDA",
        firstName: "Cep",
        lastName: "Dapit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
