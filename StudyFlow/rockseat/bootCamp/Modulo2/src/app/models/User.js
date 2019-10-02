const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }
  })
  //Criando novos métodos, User.prototype.....
  //Devido ao escopo this, nao podemos usar arrow function
  //Criamos um função que compara o password digitado com
  //o password do bcrypt
  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }
  return User
}

//
