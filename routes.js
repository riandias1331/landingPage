const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/Controller')

//
route.get('/', homeController.index)

// serviço
route.get('/services', homeController.serviço)

// sobre
route.get('/sobre', homeController.sobre)

// contato
route.get('/contato', homeController.contato)

// criar conta
route.get('/criar_conta', homeController.criarconta)

// logar
route.post('/logado', homeController.criarconta)


module.exports = route