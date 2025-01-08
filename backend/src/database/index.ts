import { Sequelize } from 'sequelize-typescript';

import {
  Ingredient,
  IngredientSupplier,
  Recipe,
  Supplier,
  UnitOfMeasurement,
  User,
  Chef,
} from '@app/models';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('../config/database');

const models = [
  User,
  Supplier,
  Ingredient,
  IngredientSupplier,
  UnitOfMeasurement,
  Recipe,
  Chef,
];

const sequelize = new Sequelize(config);

sequelize.addModels(models);

export default sequelize;
