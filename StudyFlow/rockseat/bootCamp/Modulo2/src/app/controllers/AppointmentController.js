//Importando Usuario
const {  User} = require('../models')

class AppointmentController {
  async create(req, res) {
    //buscando o usuario pela primary key
    const provider = await User.findByPk(req.params.provider)
    return res.render('appointments/create', {
      provider
    })
  }
}

module.exports = new AppointmentController()