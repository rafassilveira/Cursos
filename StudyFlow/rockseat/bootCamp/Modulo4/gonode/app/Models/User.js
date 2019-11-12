'use strict'


const Model = use('Model')


const Hash = use('Hash')

// O Model é o orm padrão do Adonis
// Logo o usuário será extendeno para esse model
class User extends Model {
  // static book é como fosse o constructo da nossa classe
  static boot () {
    super.boot()

    // add um hook automaticamente antes de salvar um novo usuario
    // faz um hash na senha se foi alterado ou um usuario novo foi criado
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }


  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
