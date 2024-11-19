import { Sequelize } from 'sequelize-typescript';

import User from '../models/user';
import Supplier from '../models/supplier';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('../config/database');

const models = [User, Supplier];

const sequelize = new Sequelize(config);

sequelize.addModels(models);

export default sequelize;
