'use strict'
// usando o use para importar o model do usuario
// use == request
const User = use('App/Models/User')

class UserController {
  async store({
    request
  }) {
    // alterando somente os campos...
    const data = request.only(['username', 'email', 'password'])
    // Criadno o usuario
    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
