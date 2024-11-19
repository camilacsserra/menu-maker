import { Sequelize } from 'sequelize-typescript';

import Supplier from '../models/supplier';
import User from '../models/user';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('../config/database');

const models = [User, Supplier];

const sequelize = new Sequelize(config);

sequelize.addModels(models);

export default sequelize;
