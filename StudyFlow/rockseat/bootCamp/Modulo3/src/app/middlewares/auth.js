const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
// é uma fumção nativa do node, que nos permite usar async await, quando nao
// quando não disponivel,

const {
  promisify
} = require('util')

//exportando o middle
module.exports = async (req, res, next) => {
  //buscar o header authorization
  const authHeader = req.headers.authorization
  //se não existir
  if (!authHeader) {
    return res.status(401).json({
      error: 'Token not provided'
    })
  }

  // quando recebemos o token, ele vem bom a palavra Bearer seguida de espaço e
  // o toke, entoa vamos usar o split para pega somente o token, e usando a
  //destruturação armazenamos na variavel token
  const [, token] = authHeader.split(' ')
  //
  try {

    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    //add dentro do req o id do usuario, assim toda nossa aplicação que passar
    // pelo esse middleware saberá o user id
    req.userId = decoded.id
    return next()

  } catch (err) {
    return res.status(401).json({
      error: 'Token invalid'
    })
  }

}