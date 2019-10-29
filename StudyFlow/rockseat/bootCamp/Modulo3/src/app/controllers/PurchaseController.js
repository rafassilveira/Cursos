const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')

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

    await Mail.sendMail({
      from: '"Rafael Silveira" <rafaelssilveira@outlook.com>',
      to: purchaseAd.author.email,
      subject: `Solicitação de compra: ${purchaseAd.title}`,
      html: `<p>Teste: ${content}</p>`
    })
    return res.send()
  }
}
module.exports = new PurchaseController()