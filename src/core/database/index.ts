import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModule, SequelizeModuleOptions } from "@nestjs/sequelize";
import { ConfigInterface } from "../configuration/interfaces/config";

export default SequelizeModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService<ConfigInterface>) => configService.get<SequelizeModuleOptions>('db', {}),
  inject: [ConfigService],
});