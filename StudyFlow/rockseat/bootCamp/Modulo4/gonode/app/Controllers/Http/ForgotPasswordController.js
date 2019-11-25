'use strict'


const User = use('App/Models/User')
// Modulo do node para criar token aleatórios
const crypto = require('crypto')
const Mail = use('Mail')

class ForgotPasswordController {
  async store({
    request,
    response
  }) {
    // try serve para tratamento de erro, nesse caso, caso
    // usuario digite um email que nao exista
    try {
      // buscando o email da requisição
      // Para buscar uma unica informção podemos usar o input
      const email = request.input('email')
      // encotrar o usuario
      // findBy encotra um unico registro,ou retorna um erro e cai no catch
      const user = await User.findByOrFail('email', email)

      // se econtrorar o usuario vai gerar o token
      // gerando o token de 10 bytes convertendo para hexadecimal
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send()['emails.forgot_password'], {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`
        },

        message => {
          message
            .to(user.email)
            .from('rafaelssilveira@otlook.com', 'Rafael | Correios')
            .subject('Recuperação de Senha')
        }

    } catch (err) {
      return response
        .status(err.status)
        .send({
          error: {
            message: 'Algo não deu certo esse email existe?'
          }
        })
    }
  }
}

module.exports = ForgotPasswordController
