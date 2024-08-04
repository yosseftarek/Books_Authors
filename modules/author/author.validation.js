import Joi from "joi";

export const addAuthorSchema = Joi.object({
  name: Joi.string().required(),
  bio: Joi.string().required(),
  birthDate: Joi.string()
    .required()
    .pattern(/^\d{1,2}-\d{1,2}-\d{4}$/),
  books: Joi.required(),
});

export const updateAuthorSchema = Joi.object({
  name: Joi.string().required().allow(null),
  bio: Joi.string().required().allow(null),
  birthDate: Joi.string()
    .required()
    .pattern(/^\d{1,2}-\d{1,2}-\d{4}$/)
    .allow(null),
  books: Joi.allow(null),
});
