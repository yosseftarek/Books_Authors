import Joi from 'joi'

export const addBookSchema = Joi.object({
    title:Joi.string().required(),
    content:Joi.string().required(),
    author:Joi.string().required(),
    publishedDate:Joi.string().pattern(/^\d{1,2}-\d{1,2}-\d{4}$/).optional(),
})

export const updateBookSchema = Joi.object({
    title:Joi.string().required().allow(null),
    content:Joi.string().required().allow(null),
    author:Joi.string().required().allow(null),
    publishedDate:Joi.string().pattern(/^\d{1,2}-\d{1,2}-\d{4}$/).allow(null),

})

