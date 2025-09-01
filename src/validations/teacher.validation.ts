import Joi from "joi";

export const teacherValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  middleName: Joi.string().optional(),
  degree: Joi.string().required(),
  position: Joi.string().required(),
  experience: Joi.number().required(),
});