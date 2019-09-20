//Requições
const express = require('express')
const nunjucks = require("nunjucks")

const app = express()

app.use(express.urlencoded({
  extended: false
}))

app.set('view engine', 'njk')

nunjucks.configure('views', {
  autoescape: true,
  express: app, //puxar o express
  watch: true, //ficar observando alguma mudança
});
//interceptador, o parametro "next" serve para nao bloquear o fluxo
//Interceptadr serve para manipular e modificar dados em outras rotas
const chekAge = (req, res, next) => {
  const {
    age
  } = req.query
  if (!age) {
    res.redirect('/')

  } else {
    return next()
  }

}






app.get('/', (req, res) => {
  return res.render('age')

})

app.get('/major', chekAge, (req, res) => {
  const {
    age
  } = req.query

  return res.render('major', {
    age
  })
})

app.get('/minor', chekAge, (req, res) => {
  const {
    age
  } = req.query
  return res.render('minor', {
    age
  })
})


app.post('/check', (req, res) => {
  const {
    age
  } = req.body
  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  }
  return res.redirect(`/minor?age=${age}`)


})

app.listen(3000)
