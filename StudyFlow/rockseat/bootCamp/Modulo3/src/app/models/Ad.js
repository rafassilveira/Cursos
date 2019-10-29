const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate')


const Ad = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  //Aqui teremos que fazer uma relacionamento com o usuario,
  author: {
    //aqui vamos armazenar um id do usuario no bd
    type: mongoose.Schema.Types.ObjectId,
    //estamos referenciando o User do model, como usuario
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})
//incluindo o pagiante
Ad.plugin(mongoosePaginate)
module.exports = mongoose.model('Ad', Ad)