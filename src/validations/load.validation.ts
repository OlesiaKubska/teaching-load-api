import Joi from "joi";

export const loadValidationSchema = Joi.object({
  teacher: Joi.string().required(),
  subject: Joi.string().required(),
  group: Joi.string().required(),
  type: Joi.string().valid("lecture", "practice").required(),
  year: Joi.number().integer().min(2000).max(new Date().getFullYear()).required()
});

export const loadPatchValidationSchema = Joi.object({
  teacher: Joi.string(),
  subject: Joi.string(),
  group: Joi.string(),
  type: Joi.string().valid("lecture", "practice"),
  year: Joi.number()
    .integer()
    .min(2000)
    .max(new Date().getFullYear()),
}).min(1);