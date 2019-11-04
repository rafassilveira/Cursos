const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store(req, res) {
    const {
      //id de compra
      ad,
      //uma menssagem que o usuario podera deixar para o anunciante
      content
      //buscando do body na requisição
    } = req.body
    //verificando se exisite esse anuncio e trazendo as informações do autor
    const purchaseAd = await Ad.findById(ad).populate('author')
    // buscar as informações de usuário logado
    const user = await User.findById(req.userId)

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()//salva o jobs no redis e executa afila

    return res.send()
  }
}
module.exports = new PurchaseController()