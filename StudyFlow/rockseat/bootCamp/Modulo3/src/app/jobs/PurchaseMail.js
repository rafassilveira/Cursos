const Mail = require('../services/Mail')

class PurchaseMail {
  get key() {
    //retornando chave unica
    return 'PurchaseMail'
  }
  //enviar email
  //job e done são padrão
  async handle(job, done) {

    const {
      ad,
      user,
      content
    } = job.data// data é método dentro do job
    await Mail.sendMail({
      from: '"Rafael Silveira" <rafaelssilveira@outlook.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      constext: {
        user,
        content,
        ad
      }
    })
    //avisa o job que foi finalizado
    return done()
  }
}

module.exports = new PurchaseMail()