import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigInterface } from "../configuration/interfaces/config";

export default SequelizeModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService<ConfigInterface>) => configService.get('db', {}),
  inject: [ConfigService],
});