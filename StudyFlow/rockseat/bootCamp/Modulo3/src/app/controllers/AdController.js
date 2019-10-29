const Ad = require('../models/Ad')

class AdController {
  async index(req, res) {
    //buscando todos os ads
    const filters = {}
    //filtro de preço max e min
    if (req.query.price_min || req.query.price_max) {
      filters.price = {}
      if (req.query.price_min) {
        //$gte => gran than => maior que
        filters.price.$gte = req.query.price_min
      }

      if (req.query.price_max) {
         //$lte => less than => menor que
        filters.price.$lte = req.query.price_max
      }
    }
    if (req.query.title) {
      //usando a Regexp para verificar se palavra que o usuário está enviando
      //está contido no titulo do anuncio, não que a palavara seja igual ao
      //titulo
      filters.title = new RegExp(req.query.title, 'i')//i => case insensitive
    }
    //trocando o find por paginate
    //O segundo parametro do paginate é filtro que queremos buscar
    const ads = await Ad.paginate(filters, {
      //pagina inicial,padrão é 1, vem como query params,
      //entao verificar se existe senão vai para 1
      page: req.query.page || 1,
      //itens por pagina
      limit: 20,
      // populate passamos o relacioanamento que queremos popular
      populate: ['author'],
      //ordeando os itens pela data de criação
      sort: '-createdAt'
    })

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