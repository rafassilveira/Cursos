'use strict'



const Model = use('Model')
const Env = use ('Env')


class File extends Model {
  // Criando um campo virtual, para quando for chamado o arquivo, ele virá junto
  static get computed() {
    // novo campo retornado
    return ['url']
  }
  // get + campor retornado em caml case
  getUrl({
    id
  }) {
    // APP_URL vem do arquivo .env
    // depois vem a rota que criamosRoute.get('/files/:id', 'FileController.show')
    return `${Env.get('APP_URL')}/files/${id}`



  }
}

module.exports = File
