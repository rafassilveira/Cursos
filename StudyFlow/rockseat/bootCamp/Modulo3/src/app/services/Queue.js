const kue = require('kue')
const Sentry = require('@sentry/node');
const redisConfig = require('../../config/redis')
const jobs = require('../jobs')

const Queue = kue.createQueue({
  redis: redisConfig
})
//dizendo para o node para processar a fila para todos os jobs que tenha
// a key PurchaseMail chamadno o metodo handle do PurchaseMail.js
Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

Queue.on('error', Sentry.captureException)

module.exports = Queue