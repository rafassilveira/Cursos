require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Youch = require('youch')
const Sentry = require('@sentry/node'); //novo
const validate = require('express-validation')
const databaseConfig = require('./config/database')
const sentryConfig = require('./config/sentry') //novo
class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.sentry() //novo
    this.database()
    this.middlewares()
    this.routes()
    //é necessário que isso seja depois da routes
    this.exception()
  }
  // vamos fazer a configuração antes para que todos os arquivos tenham
  // acesso

  //novo
  sentry() {
    Sentry.init(sentryConfig)
  }

  database() {
    mongoose.connect(
      databaseConfig.uri, {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true

      })
  }


  middlewares() {
    this.express.use(express.json())
    this.express.use(Sentry.Handlers.requestHandler()) //novo
  }

  routes() {
    this.express.use(require('./routes'))
  }
  exception() {
    //midleware para lidar com as partes das excecões

    //executar somenteem produção
    if (process.env.NODE_ENV === 'production') { //novo
      this.express.use(Sentry.Handlers.errorHandler()) //novo
    }

    //Quando o midleware recebe 4 parametros o 1º passar a ser o erro
    this.express.use(async (err, req, res, next) => {
      // Fazendo que o erro seja formado em JSON
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }
      //se estiver em ambiente de desenvolvimento
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)
        return res.json(await youch.toJSON())
      }
      return res.status(err.status || 500).json({
        error: 'Internal Server Error'
      })
    })
  }
}
module.exports = new App().express