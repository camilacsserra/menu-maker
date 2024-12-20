import { Sequelize } from 'sequelize-typescript';

import {
  Ingredient,
  IngredientSupplier,
  Recipes,
  Supplier,
  UnitOfMeasurement,
  User,
} from '@app/models';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('../config/database');

const models = [
  User,
  Supplier,
  Ingredient,
  IngredientSupplier,
  UnitOfMeasurement,
  Recipes,
];

const sequelize = new Sequelize(config);

sequelize.addModels(models);

export default sequelize;
