'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('appointments', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            date: {
              allowNull: false,
              type: Sequelize.DATE,
            },
            //chaves estrangeiras, chaves de relacionamento usuario
            user_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'users',
                key: 'id'
              },
              //server para caso mude o id do user atualizar automaticamente
              onUpdate: 'CASCADE',
              //server para caso delete o id do user atualizar automaticamente
              onDelete: 'CASCADE',
              allowNull: false,
            },
            //chaves estrangeiras, chaves de relacionamento provider
            provider_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'users',
                key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
              allowNull: false,
            },
            created_at: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updated_at: {
              allowNull: false,
              type: Sequelize.DATE

            })
        },

        down: (queryInterface, Sequelize) => {
          return queryInterface.dropTable('appointments');
        }
    };