'use strict'


const Schema = use('Schema')

class ProjectSchema extends Schema {
  up() {
    this.create('projects', (table) => {
      table.increments()
      table
        .integer('user_id') //id do usuári para saber quem criou o projeto
        .unsigned()// forçar valores positivos
        .references('id')// nome do campo que quremos referenciar
        .inTable('users') // em qual tabela queremos referenciar
        .onUpdate('CASCADE') // caso for alterado na tabela usuario, irá alterar aqui tbm
        .onDelete('SET NULL') // caso o usuario for deletado , o user_id será null
      table.string('title').notNullable() // titulo do projeto
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
