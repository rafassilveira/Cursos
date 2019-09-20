const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app, //puxar o express
  watch: true, //ficar observando alguma mudança
});

//dizer para express saber lidar com o requisições html
app.use(express.urlencoded({
  extended: false
}))
//operações globais
app.set('view engine', 'njk')

var users = ['Rafael', "Pamela", 'Bulma']


app.get("/", (req, res) => {
  return res.render('list', {
    users
  })
});

app.get('/new', (req, res) => {

  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect("/")

})


app.listen(3000)
