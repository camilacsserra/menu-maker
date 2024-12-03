import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('IngredientSuppliers', {
      ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Ingredients',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true, // Parte da chave primária composta
      },
      supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Suppliers',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true, // Parte da chave primária composta
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('IngredientSuppliers');
  },
};
