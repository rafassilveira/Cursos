//Importando Usuario
const {
  User,
  Appointment
} = require('../models')

class AppointmentController {
  async create(req, res) {
    //buscando o usuario pela primary key
    const provider = await User.findByPk(req.params.provider)
    return res.render('appointments/create', {
      provider
    })
  }
  async store(req, res) {
    // id do usuario que esta logado, para usar como ele quefez o agendamento
    const {
      id
    } = req.session.user
    //pegar o provider de dentro dos parametros das rotas, para saber quem vai fazer o serviço
    const {
      provider
    } = req.params
    //input que agente preenchee nos botao da radio la no /available/index.ja
    const {
      date
    } = req.body

    await Appointment.create({
      user_id: id,
      provider_id: provider,
      date
    })
    return res.redirect('/app/dashboard')
  }
}

module.exports = new AppointmentController()