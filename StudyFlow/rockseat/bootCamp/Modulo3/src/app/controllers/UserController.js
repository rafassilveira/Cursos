const User = require('../models/User')

class UserConroller {
  //Criando um étodo store
  async store (req, res){
    const { email } = req.body

    //Verificar se já existe esse email cadastrado
    if (await User.findOne({ email})) {
      return res.status(400).json({ error:'error User already exists'})
    }

    const user = await User.create(req.body)

    return res.json(user)
  }
}

module.exports= new UserConroller()