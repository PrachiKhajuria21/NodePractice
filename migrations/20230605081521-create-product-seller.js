'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productSellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: "products", key: "id", as: "productId" },
        onDelete: "CASCADE"
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references: { model: "sellers", key: "id", as: "sellerId" },
        onDelete: "CASCADE"
      },
      isDelete: {
        allowNull:true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productSellers');
  }
};