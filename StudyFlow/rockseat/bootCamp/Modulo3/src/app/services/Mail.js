const nodemailer = require('nodemailer')
const path = require('path')
/*handlebars */
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
/*handlebars */
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)

const viewPath = path.resolve(__dirname, '..', 'views', 'emails')

transport.use(
  'compile',
  //configurando a maneira com o nodemailer lida com os template de emails
  hbs({
    viewEngine: exphbs.create({
      //criando uma partials para ser reutilizado na aplicação
      partialsDir: path.resolve(viewPath, 'partials'),
      defaultLayout: null,
    }),
    viewPath,
    //extensões para os templates
    extName: '.hbs'
  })
)

module.exports = transport