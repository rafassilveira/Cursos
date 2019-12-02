'use strict'

const File = use('App/Models/File')
// Serve para ajudar com caminhos e com outras funções que não estão no JS
const Helpers = use('Helpers')



class FileController {
  async show ({
    params,response
  }) {
    const file = await File.findOrFail(params.id
      )
    // retornando o arquivo em formato de imagem,tmpPath é caminho do arquivo
    return response.download(Helpers.tmpPath(`uploads/${file.file}`))
  }

  async store({
    request,
    response
  }) {
    try {
      // verifica se existi na requisição o file
      if (!request.file('file')) return
      // size é o tamanho limite
      const upload = request.file('file', {
        size: '2mb'
      })
      // date.now data real do upload, para nao haver repetição
      // upload.subtype é aextenção do arquivo
      const fileName = `${Date.now()}.${upload.subtype}`
      // fazendo o upload
      // helpers.tmpPath é uma pasta temporaria que não é compartilhada
      // entre ambiente de produção e desenvolvimento
      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })
      // verificando se o precesso deu certo
      if (!upload.moved()) {
        throw upload.error
      }
      // novo registro no BD com os campos abaixo
      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype

      })
      return file
    } catch (err) {
      // em caso de erro
      return response
        .status(err.status)
        .send({
          error: {
            message: 'Erro no upload de arquivo'
          }
        })

    }
  }

}

module.exports = FileController
