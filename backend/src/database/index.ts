import { Sequelize } from "sequelize-typescript";
import User from "../models/user";

const config = require("../config/database");

const models = [User];

const sequelize = new Sequelize(config);

sequelize.addModels(models);

export default sequelize;