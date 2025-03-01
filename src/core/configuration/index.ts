import { ConfigInterface } from "./interfaces/config";
import { Dialect } from "sequelize"

export default (): ConfigInterface => ({
  db: {
    uri: process.env.DB_URI,
    dialect: process.env.DB_DIALECT as Dialect
  },
  port: Number(process.env.PORT),
  environment: process.env.NODE_ENV as ConfigInterface["environment"]
});
