const moment = require('moment')
// variavel padrao do sequilize para manipular datas
const {
  Op
} = require('sequelize')
const {
  Appointment
} = require('../models')

class AvailableController {
  async index(req, res) {
    //pegar a data enviando pelo query.params(?), e passar para inteiro
    const date = moment(parseInt(req.query.date))

    //buscar todos os agendamentos, do dia selecionado
    const appointments = await Appointment.findAll({
      where: {
        //pegar os agedamentos do provider
        provider_id: req.params.provider,

        date: {
          //between precisa de uma data inicial e final
          [Op.between]: [
            date.startOf('day').format(),
            date.endOf('day').format(),
          ]
        }
      }
    })
    //definindo os horarios estaticamente
    const schedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00'

    ]
    //verificar se tem horarios disponivel ou se já passou

    const available = schedule.map(time => {
      //retirar o horario e minuto
      const [hour, minute] = time.split(':')
      //formatando a hora pra 2019-09-16 08:00:00
      const value = date
        .hour(hour)
        .minute(minute)
        .second(0)
      return {
        time,
        //retornar um formato legivel
        value: value.format(),
        //verficar se  horio já passoi do horario atual, retorna boolean
        available: value.isAfter(moment()) &&
          //vai pecorrer ao horarios e verificar se está ocupado
          !appointments.find(a => moment(a.date).format('HH:mm') === time)
      }
    })
    return res.render('available/index', {
      available
    })
  }
}
module.exports = new AvailableController()