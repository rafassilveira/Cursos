'use strict'

class SessionController {
  // criar uma nova sessão
  async store({
    request,
    response,
    auth
  }) {
    const {
      email,
      password
    } = request.all()
    // gerando o token
    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
