import Joi from "joi";

export const subjectValidationSchema = Joi.object({
  name: Joi.string().required(),
  hours: Joi.number().integer().min(1).required(),
});