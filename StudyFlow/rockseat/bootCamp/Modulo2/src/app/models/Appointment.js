module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    //Campode data  com o horario dos agendamentos
    date: DataTypes.DATE // daa de inicio
  })
  Appointment.associate = models => {
    //usamos o belongsto(), para armazenar chaves estrangeiras,em uma tabela(appointment)
    //O appointment pertece ao seguinte usuario
    Appointment.belongsTo(models.User, {
    //nome da chave que vai guardar esse relacionamento
      foreignKey: 'user_id'
    })
    // Quem vai fazer o serviço
    Appointment.belongsTo(models.User, {
      foreignKey: 'provider_id'
    })
  }
  return Appointment
}
