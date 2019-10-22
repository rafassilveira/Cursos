const User = require('../models/User')

class SessionController {
  //fazer o papel do login
  async store(req, res) {
    const {
      email,
      password
    } = req.body
    //tentar encotrar um usuario atráves do email
    const user = await User.findOne({
      email
    })
    // se não existir retornar um erro
    if (!user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }

    //verificando a senha, se nao baer retorna error
    if (!await user.compareHash(password)) {
      return res.status(400).json({
        error: 'Invalid password'
      })
    }

    return res.json({
      user,
      token: User.generateToken(user)
    })
  }
}

module.exports = new SessionController()