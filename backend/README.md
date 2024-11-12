# Menu Maker

## Required dependencies
```sh
npm i sequelize
npm i sequelize-cli
npm i sequelize-typescript
npm i express
npm i typescript
npm i ts-node-dev
npm i pg pg-hstore
npm i dotenv
npm i -D @types/express
npm i yup
npm i bcrypt
npm i express-async-errors
```

## Initializing the typescript
```sh
npx tsc --init
```

## Enables decorators
```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```

## Configuring the sequelize
```
// .sequelizerc

const { resolve } = require("path");

module.exports = {
  "config": resolve(__dirname, "dist", "config", "database.js"),
  "modules-path": resolve(__dirname, "dist", "models"),
  "migrations-path": resolve(__dirname, "dist", "database", "migrations"),
  "seeders-path": resolve(__dirname, "dist", "database", "seeds")
};
```

## Executing the migrations
```sh
npx sequelize db:migrate
```

### Running the database
```sh
docker-compose up
```

### Adding the execution command

```json
# package.json -> scripts

"scripts": {
  "start": "ts-node-dev --respawn --transpile-only --ignore node_modules src/server.ts"
}
```