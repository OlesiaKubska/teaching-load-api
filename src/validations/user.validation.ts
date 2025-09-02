import Joi from "joi";

export const registerValidation = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.base": `"username" must be a string`,
    "string.empty": `"username" cannot be empty`,
    "string.min": `"username" should have a minimum length of {#limit}`,
    "string.max": `"username" should have a maximum length of {#limit}`,
    "any.required": `"username" is required`,
  }),
  email: Joi.string().email().required().messages({
    "string.email": `"email" must be a valid email`,
    "any.required": `"email" is required`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": `"password" should have a minimum length of {#limit}`,
    "any.required": `"password" is required`,
  }),
});


export const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": `"email" must be a valid email`,
    "any.required": `"email" is required`,
  }),
  password: Joi.string().required().messages({
    "any.required": `"password" is required`,
  }),
});