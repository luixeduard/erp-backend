import * as Joi from 'joi';

const validation = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().port().default(3000),
  DB_URI: Joi.string().uri().required(),
  DB_DIALECT: Joi.string().valid('mysql', 'postgres', 'sqlite', 'mariadb', 'mssql', 'db2', 'snowflake', 'oracle').required(),
})

export default validation