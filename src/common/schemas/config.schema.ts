import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  PORT: Joi.number().default(3000),
});
