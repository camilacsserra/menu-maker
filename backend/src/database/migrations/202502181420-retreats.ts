import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('Retreats', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number_of_participants: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      check_in_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      check_in_hour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      check_out_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      check_out_hour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      general_diet_preferences: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      daily_dessert: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      first_meal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'MealTypes',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      last_meal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'MealTypes',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      breakfast_at: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      lunch_at: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      dinner_at: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      created_by_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_by_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('Retreats');
  },
};
