import { Sequelize } from 'sequelize-typescript';

import { Ingredient, IngredientSupplier, Supplier, User } from '@app/models';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('../config/database');

const models = [User, Supplier, Ingredient, IngredientSupplier];

const sequelize = new Sequelize(config);

sequelize.addModels(models);

export default sequelize;
