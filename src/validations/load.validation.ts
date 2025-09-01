import Joi from "joi";

export const loadValidationSchema = Joi.object({
  teacher: Joi.string().required(),
  subject: Joi.string().required(),
  group: Joi.string().required(),
  type: Joi.string().valid("lecture", "practice").required(),
});