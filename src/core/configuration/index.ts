import { Color } from "src/modules/color/entity/color.entity";
import { ConfigInterface } from "./interfaces/config";
import { Dialect } from "sequelize"

export default (): ConfigInterface => ({
  db: {
    uri: process.env.DB_URI,
    dialect: process.env.DB_DIALECT as Dialect,
    models: [
      Color
    ],
    autoLoadModels: true,
    synchronize: true
  },
  port: Number(process.env.PORT),
  environment: process.env.NODE_ENV as ConfigInterface["environment"]
});
