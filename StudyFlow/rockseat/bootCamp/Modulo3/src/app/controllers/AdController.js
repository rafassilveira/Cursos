const Ad = require('../models/Ad')

class AdController {
  async index(req, res) {
    //buscando todos os ads
    const ads = await Ad.find()

    return res.json(ads)
  }


  async show(req, res) {
    //pegando um unico ad pelo params que vem da rota
    const ad = await Ad.findById(req.params.id)
    return res.json(ad)
  }


  async store(req, res) {
    const ad = await Ad.create({
      //Colocando todas as informações no req.body
      ...req.body,
      //colocando no autor o userId que criamos no auth.js do middleware
      //vindo do jwt
      author: req.userId
    })

    return res.json(ad)
  }
  async update(req, res) {
    /*findByIdAndUpdate: 1º Recebe o id como parametro, depois recebe todas
    as informações quer queremos atualizar no model */
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      //array de configuração, que depois do update ele vai atualizar o ad
      //com as novas informações pra retornar ao front end ja atualizada
      new: true
    })
    return res.json(ad)
  }
  async destroy(req, res) {
    await Ad.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new AdController()