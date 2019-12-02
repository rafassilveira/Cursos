'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up() {
    this.create('files', (table) => {
      table.increments()
      // nome que vai ser gravado no adonis
      table.string('file').notNullable()
      // nome original
      table.string('name').notNullable()
      // tipo de arquivo com 20 carcteres
      table.string('type', 20)
      // qual extensão do arquivo com 20 
      table.string('subtype', 20)
      table.timestamps()
    })
  }

  down() {
    this.drop('files')
  }
}

module.exports = FileSchema
