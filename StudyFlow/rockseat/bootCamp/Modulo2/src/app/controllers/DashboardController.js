const { User } = require('../models')
class DashboardController{
  async index ( req,res){
    //buscando todos os providers, ou seja todos os cadastros no bd que provider
    // seja igual 'true'
    const providers = await User.findAll({ where:{provider:true}})
    return res.render('dashboard',{ providers })
  }
}

module.exports= new DashboardController()
