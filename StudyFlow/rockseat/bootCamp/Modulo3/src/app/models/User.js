const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

//criptogreafia de senhado usuário
// usamos a função pre para que faça alguma ação antes de outr ação
//Nesse caso ação é o save, ou seja antes de criar ou fazer algum update,
//irá realizar essa ação do pre

UserSchema.pre('save', async function () {
  //se o password não fou modificado, não faz nada
  if (!this.isModified('password')) {
    return next()
  }
  //se aconteceu alguma alteração então irá fazer o hash da senha atravpes
  //do bcrypt com força 8
  this.password = await bcrypt.hash(this.password, 8)
})

//comparar a senha que o usuario digitou com a senha criptografa do BD
UserSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password)
  }
}

UserSchema.statics = {
  generateToken({
    id
  }) {
    //informações criptografadas
    return jwt.sign({
      //por padrao passamos o id
      id
      // gerar um secret para não dá conflito, caso outra apliação use o jwt
    }, authConfig.secret, {
      //tempo dura o token
      expiresIn: authConfig.ttl,
    })
  }
}

//exportando o UserSchema que acabamos de criar como User
module.exports = mongoose.model('User', UserSchema)