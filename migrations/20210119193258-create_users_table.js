'use strict';

const sequelize = require("../config/database");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('users',{
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      lastName:{
        type:Sequelize.STRING,
        allowNull:false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('users')
  }
};
