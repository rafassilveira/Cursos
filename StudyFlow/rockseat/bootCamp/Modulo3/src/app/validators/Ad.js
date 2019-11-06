const Joi = require('joi')

module.exports = {
//podemos validar também as query params
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  }
}